// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key 0246261d62d94ff1b108011e7af486f7
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const opencage = require('opencage-api-client');
const request = require('request-promise')
const { getAddressPosition }  = require('./exercise-2')


function getCurrentTemperatureAtPosition(position) {
    return request(`https://api.darksky.net/forecast/0246261d62d94ff1b108011e7af486f7/${position.lat},${position.lng}`)
        .then(weather => {
            let shai = JSON.parse(weather)
            // console.log('what',shai.currently.temperature)
            return shai.currently.temperature;
        })
}
getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then(getCurrentTemperatureAtPosition)

module.exports = { getCurrentTemperatureAtPosition }