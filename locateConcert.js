var axios = require('axios');
// bands in town
function locateConcert() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (i = 0; i < response.lenght; i++) {
            return venue.name;
        }
    });
}
exports.locateConcert = locateConcert;
