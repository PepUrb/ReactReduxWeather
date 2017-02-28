import axios from 'axios';
// sample format  http://api.openweathermap.org/data/2.5/forecast?appid=b1b15e88fa797225412429c1c50c122a1
//  http://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
const API_KEY = '93d4f2ce156fb14530158491236f474b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //es6 Template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
