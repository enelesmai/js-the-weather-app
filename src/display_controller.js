import { Weather } from './weather';
export const DisplayController = (() => {
    const displayWeather = (w) => {
        console.log('display');
        console.log(w);
        document.getElementById('general').innerHTML = w.getGeneralDescripcion();
        document.getElementById('temp').innerHTML = w.getDetails().temp;
        document.getElementById('temp_max').innerHTML = w.getDetails().temp_max;
        document.getElementById('temp_min').innerHTML = w.getDetails().temp_min;
        document.getElementById('feels_like').innerHTML = w.getDetails().feels_like;
        document.getElementById('pressure').innerHTML = w.getDetails().pressure;
        document.getElementById('humidity').innerHTML = w.getDetails().humidity;
    };
    return {
        displayWeather,
    };
})();
export default DisplayController;