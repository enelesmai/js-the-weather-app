import _ from 'lodash';
import { ApiController } from './api_controller';
import DisplayController from './display_controller';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
ApiController.getWeatherAsync('London')
    .then(data => DisplayController.displayWeather(data));