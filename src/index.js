import { ApiController } from './api_controller';
import { DisplayController } from './display_controller';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/searchbox.css';

const getInfo = (search, mode) => {
    ApiController.getWeatherAsync(search, mode)
        .then(data => DisplayController.displayWeather(data, mode));
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search_input');
    const searchIcon = document.getElementById('search_icon');
    const chkCelsius = document.getElementById('chkCelsius');

    // addevent onclick or enter
    searchIcon.addEventListener('click', () => {
        getInfo(searchInput.value, chkCelsius.checked ? 'C' : 'F');
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getInfo(searchInput.value, chkCelsius.checked ? 'C' : 'F');
        }
    });

    chkCelsius.addEventListener('change', () => {
        getInfo(searchInput.value, chkCelsius.checked ? 'C' : 'F');
    });
});