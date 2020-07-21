import _ from 'lodash';
import { ApiController } from './api_controller';
import DisplayController from './display_controller';

const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=79ob7uEjk3i88OjPm9WFb4aBzpsFUqhY&s=cats', { mode: 'cors' })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });


// DisplayController.displayWeather(
//     ApiController.getWeather('London'));

console.log('test');
console.log(ApiController.getWeather('London'));