require('dotenv').config();
var moment = require('moment');
var axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api')
// var spotify = new Spotify(keys.spotify);
var fs = require('fs')

console.log(process.argv[2])

var myCase = process.argv[2];
var search = process.argv[3];

switch (myCase) {

    case 'concert-this':
        findConcert();
        break;

    case 'spotify-this':
        searchSong()
        break;

    case 'movie-this':
        findMovie();
        break;

    case 'do-what-it-says':
        justDoIt()
        console.log('Does not compute!! Liri shutting down.');
}


// bands in town
function findConcert() {

    axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`).then(function (response) {
        // console.log(response)
        var stuff = response.data;
        // console.log(stuff)
        for (let i = 0; i < stuff.length; i++) {
            const yellow = stuff[i];
            console.log(yellow.venue.name)
            console.log(yellow.datetime)

        }
        // console.log(response.data)
        console.log(stuff.offers)



    });
};

// spotify
function searchSong() {
    spotify.search(
        {
            type: 'string',
            query: 'artist'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
};


function findMovie() {

    axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`).then(
        function (response) {
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + moment(response.data.Released, 'DD MMM YYYY').format('LL'));
            console.log("The movie's rating is: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + response.data.Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);

        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config)
        });
}