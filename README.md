# Movie History API & Angular Team Project

You will be split up into teams of three, and your team will build a new application to keep track of movies that you have seen, and want to see, with your own ratings based on [OMDb API](http://omdbapi.com/).

# Team Name: It's Kinda Late

## Contributors:
-[Bernard Anderson](https://gtihub.com/bernardanderson)
-[Dan Ventura](https://github.com/danwventura)
-[Teriq Perry](https://github.com/jtmp2r)
-[Bradley Guthrie](https://github.com/guthb) -- Team Leader

### Setup
You will need a simple web server to host this, Node.js worked well for us:

clone down repo
cd into /lib
```
$ cd lib/
$ npm install
$ bower install
```
in root of  application

```
$ http-server -p 8080
```
in lib/

```
$ gulp
```

This will show at in your browser of choice:
'http://localhost:8080'

For developers do all:   open new terminal cd lib and gulp ( to see errors)

## Requirements
1. Must have the ability to register a user in Firebase
1. Must have the ability to log in
1. You must use Firebase to store movies
1. You must be able to add movies
1. You must be able to remove movies
1. Each movie must have the following properties
   1. Movie name
   1. Year released
   1. An integer rating of 1-5
   1. A method for marking have watched the movie
1. You must be using an automation tool to automate JavaScript testing
1. You must be using an automation tool to automate SASS compilation
1. It must be written with Angular
1. For the layout, we suggest Bootstrap, but if you want to stretch your legs, you can try [Materialize](http://materializecss.com/).

## Mockup

Review the [basic design](https://app.moqups.com/chortlehoort/uGBbLbK46Y/view/page/a3a0e7bf6) and ask questions to your product owner for clarification, or ideas on features.

### Screenshot of Login ![Screenshot](/img/login.png)

### Screenshot of Movie Search ![Screenshot](/img/omdbsearch.png)

### Screenshot of Movie Search Return  ![Screenshot](/img/searchresults.png)

### Screenshot of To Watch List ![Screenshot](/img/towatchlist.png)

### Screenshot of Watched Movie List ![Screenshot](/img/watchedlist.png)

