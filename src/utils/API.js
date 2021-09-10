  
import axios from 'axios';

// Export an object containing methods we'll use for accessing the weather geocoding and NREL irradiance APIs:

export default {
  getLatLong: function (city) {
    return axios.get (
      'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ', CO, 840&limit=1&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3'
    );
  },
  getIrradiance: function (lat, long) {

var lat1 = JSON.parse(lat)
var long1 = JSON.parse(long)
console.log(lat1,long1);
    return axios.get ('https://developer.nrel.gov/api/solar/solar_resource/v1.json?limit=1&api_key=J89k3CiSfltbxqmSjIxUXCzbciQLAh1ZQUQhEGhT&lat=' + lat1 + '&lon=' + long1 );
  }
};
