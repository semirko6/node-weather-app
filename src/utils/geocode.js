const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2VtaXJrbyIsImEiOiJjbDE1Nzg4eDAwdWE1M2ltdGVudTZ2MmVtIn0.KdubYq8vRFyYYtBjLaFnWA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Nemere se poveze sa mrezom geocode', undefined)
        }
        else if (body.features.length === 0) {
            callback('Nemere nac loakciju, probaj nesto drugo!', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode