require('dotenv').config();

var axios = require('axios')
var keys = require('./keys.js');
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var fs = require('fs')


var Liri = function (myCase, myFunction) {

    switch (myCase) {

        case 'concert-this':
            findConcert(myFunction);
            break;

        case 'spotify-this':
            searchSong(myFunction.Spotify);
            break;

        case 'movie-this':
            findMovie(myFunction);
            break;

        case 'do-what-it-says':
            justDoIt()
            console.log('Does not compute!! Liri shutting down.');
    }
};


// bands in town
function findConcert() {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (i = 0; i < response.lenght; i++) {
            return venue.name;
        }
    });
};

// spotify
function searchSong() {
    spotify.search(
        {
            type: 'string',
            query: 'All the Small Things'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
};
searchSong()

function findMovie(){
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("The movie's rating is: " + response.data.imdbRating);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
};
