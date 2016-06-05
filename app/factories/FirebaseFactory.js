"use strict"

app.factory("FirebaseFactory", function($q, $http){

  return {
    //Function to grab data from  (firebase eventually)
    toWatchListArray:[],
    haveWatchedListArray:[],



    // getMoviesFromFirebase : function(){
    //     var movies = {};
    //   return $q(function(resolve, reject){
    //     $http.get(`https://ng-bg-mh.firebaseio.com/movies.json`)
    //       .success(function(moviesJson){
    //           console.log("moviesJson in Factory", moviesJson );
    //       movies = moviesJson
    //       resolve();

    //       })
    //       .error(function(error){
    //         reject(error);
    //       })
    //   });
    // return movies

    // },

    getMoviesFromFirebase : function(){

      var movies=[];

      return $q(function(resolve, reject){
        $http.get(`https://ng-bg-mh.firebaseio.com/movies.json`)
          .success(function(returnObject){
              Object.keys(returnObject).forEach(function(key){
              returnObject[key].id=key;
              movies.push(returnObject[key]);
          console.log("movies",movies );
          });
              resolve(movies);
          })
          .error(function(error){
              reject(error);
          });
      });
    },

    putMoviesIntoFirebase : function (movie) {;

      return $q(function(resolve,reject){
          $http.post(`https://ng-bg-mh.firebaseio.com/movies.json`,
              JSON.stringify({
                  Title:movie.Title,
                  Year:movie.Year,
                  imdbID:movie.imdbID,
                  Type:movie.Type,
                  Poster:movie.Poster,
                  Rating: "notRated",
              }))
          .success(function(response){
              resolve(response);
          })
      })
    },









    updateMoviesToWatchList: function (movie){
        this.toWatchListArray.push(movie);
      },



//Movie comes into watched list with rating property
//How to display rating in seen view
    updateMoviesWatchedList: function (movie){
      this.haveWatchedListArray.push(movie);
      console.log("haveWatchedListArray", this.haveWatchedListArray);
    },

    deleteToWatchListArrayItem: function(imdbID) {
      for (var i = 0; i < this.toWatchListArray.length; i++) {
        for (var key in this.toWatchListArray[i] ) {
          if (this.toWatchListArray[i][key] === imdbID) {
            this.toWatchListArray.splice(i, 1);
            break;
          };
        }
      }
    }

  }
});