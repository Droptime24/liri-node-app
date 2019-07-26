require('dotenv').config();
var moment = require('moment');
var axios = require('axios');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys);

console.log(process.argv[2])

var myCase = process.argv[2];
var search = process.argv[3];

switch (myCase) {

    case 'concert-this':
        findConcert();
        break;

    case 'spotify-this':
        searchSong();
        break;

    case 'movie-this':
        findMovie();
        break;

    default:
    case 'do-what-it-says':
        justDoIt();
        console.log('Does not compute!! Liri shutting down.');
        break;

}


// bands in town concert search
function findConcert() {

    axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`).then(function (response) {
        // console.log(response)
        var stuff = response.data;
        // console.log(stuff)
        for (var i = 0; i < stuff.length; i++) {
            const concert = stuff[i];

            console.log(`------------------------------------------------------`);
            console.log(`Artist: ${concert.lineup}`);
            console.log("Date: " + moment(concert.datetime, ["YYYY MM DD T HH:mm", "12-25-1995", "MM-DD-YYYY", "YYYY-MM-DD", "DD MMM - DD MMM"]).format("LLL"));
            console.log(`Venue Location: ${concert.venue.name}`)
            console.log(`City: ${concert.venue.city}`);
            console.log(`State: ${concert.venue.region}`);
            console.log(`Country: ${concert.venue.country}`);
            console.log(`------------------------------------------------------`);
        }
    });
}

// spotify
function searchSong() {
   
spotify.request(`https://api.spotify.com/v1/track/`)
        .then(function (data) {
 
            console.log(data)
            
            
            for (var i = 0; i < data.length; i++) {
                const response = data[i];
                console.log(response)

            }               
        })

        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
    }


function findMovie() {

    axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`).then(
        function (response) {
            console.log(`------------------------------------------------------`);
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + moment(response.data.Released, 'DD MMM YYYY').format('LL'));
            console.log("IMDB Rating of the movie " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + response.data.Metascore + "/100");
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);
            console.log(`------------------------------------------------------`);

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

                console.log("Error", error.message);
            }
            console.log(error.config)
        });
}

// if all other call fail, run this function. 
function justDoIt() {
    console.log("Failed")

}