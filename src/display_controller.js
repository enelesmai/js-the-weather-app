import { Weather } from './weather';
export const DisplayController = (() => {
    const displayBackgroudnWeather = (weather) => {
        console.log(weather);
        const img = document.getElementById('card-current');
        const scenes = ["thunderstorm", "drizzle", "rain", "snow", "clear", "clouds"];
        let found = false;
        scenes.forEach(element => {
            console.log(element);
            if (weather.toLowerCase().includes(element)) {
                img.style.backgroundImage = "url('/src/img/" + element + ".jpg')";
                found = true;
            }
        });
        if (!found) {
            img.style.backgroundImage = "url('/src/img/athmosphere.jpg')";
        }
        console.log(found);
    };
    const displayWeather = (w) => {
        document.getElementById('general').innerHTML = w.getGeneralDescripcion();
        document.getElementById('temp').innerHTML = w.getDetails().temp;
        document.getElementById('temp_max').innerHTML = w.getDetails().temp_max;
        document.getElementById('temp_min').innerHTML = w.getDetails().temp_min;
        document.getElementById('feels_like').innerHTML = w.getDetails().feels_like;
        document.getElementById('pressure').innerHTML = w.getDetails().pressure;
        document.getElementById('humidity').innerHTML = w.getDetails().humidity;
        document.getElementById('location-full-name').innerHTML = w.getFullCityName();
        const img = document.getElementById('icon-weather');
        img.src = w.getDetails().url_icon;
        const main = document.querySelector('main');
        main.classList.remove("hide");
        main.classList.remove("show-main");
        main.classList.add("show-main");
        displayBackgroudnWeather(w.getGetMainWeather());
    };
    return {
        displayWeather,
    };
})();
export default DisplayController;