const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=794a14f4aefa5bc1b9a9d7b646f772e7&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Nemere se povezat s mrezom forecast', undefined)
        }
        else if (body.error) {
            callback('Nemere nađe lokaciju', undefined)
        }
        else{
            callback(undefined, 'Description: ' + body.current.weather_descriptions[0] +
            '\n' + 'Feeling: ' + body.current.feelslike)
        }
    })
}

module.exports = forecast