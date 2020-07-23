import _ from 'lodash';
import { ApiController } from './api_controller';
import DisplayController from './display_controller';
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/searchbox.css';

function getInfo(search, mode) {
    ApiController.getWeatherAsync(search, mode)
        .then(data => DisplayController.displayWeather(data, mode));
}

document.addEventListener('DOMContentLoaded', () => {
    let search_input = document.getElementById('search_input');
    let search_icon = document.getElementById('search_icon');
    let chkCelsius = document.getElementById('chkCelsius');

    //addevent onclick or enter
    search_icon.addEventListener('click', () => {
        getInfo(search_input.value, chkCelsius.checked ? "C" : "F");
    });

    search_input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            getInfo(search_input.value, chkCelsius.checked ? "C" : "F");
        }
    });

});