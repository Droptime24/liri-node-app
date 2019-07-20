require('dotenv').config();

var axios = require('axios')
var keys = require('./keys.js');
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var fs = require('fs')


var liri = process.argv[2];

// var text = process.argv[3];
switch (liri) {

    case 'concert-this':
        artist();
        break;

    case 'spotify-this':
        song();
        break;

    case 'movie-this':
        movie();
        break;

    default: 'do-what-it-says';
        console.log('do-what-it-says');
}

// bands in town

function artist(){

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (i = 0; i < response.lenght; i++) {
            return artist;
        }
    });
}

// spotify

spotify.search(
    {
        type: 'search',
        query: 'All the Small Things'
    })

    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err); 
    });
