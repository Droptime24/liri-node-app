require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);

var operation = process.argv[2];

function handler(operation){
    switch (operation) {
        case 'concert-this':
            console.log('concert-this');
            break;
        case 'spotify-this':
            songs()
        case 'movie-this':
            console.log('movie-this');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log('do-what-it-says');
    }
}

handler(operation);

axios.get();


