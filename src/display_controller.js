import imgThunderstorm from './assets/img/thunderstorm.jpg';
import imgDrizzle from './assets/img/drizzle.jpg';
import imgRain from './assets/img/rain.jpg';
import imgSnow from './assets/img/snow.jpg';
import imgClear from './assets/img/clear.jpg';
import imgClouds from './assets/img/clouds.jpg';
import imgAthmosphere from './assets/img/athmosphere.jpg';
export const DisplayController = (() => {
    const displayBackgroundWeather = (weather) => {
        const img = document.getElementById('card-current');
        const scenes = [{
                key: "thunderstorm",
                value: imgThunderstorm
            }, {
                key: "drizzle",
                value: imgDrizzle
            },
            {
                key: "rain",
                value: imgRain
            },
            {
                key: "snow",
                value: imgSnow
            },
            {
                key: "clear",
                value: imgClear
            },
            {
                key: "clouds",
                value: imgClouds
            }
        ];
        let found = false;
        scenes.forEach(item => {
            if (weather.toLowerCase().includes(item.key)) {
                img.style.backgroundImage = "url('" + item.value + "')";
                found = true;
            }
        });
        if (!found) {
            img.style.backgroundImage = "url('" + imgAthmosphere + "')";
        }
    };
    const displayWeather = (w, mode) => {
        w.changeDisplayMode(mode);
        document.getElementById('general').innerHTML = w.getGeneralDescripcion();
        document.getElementById('temp').innerHTML = w.getDetails().temp;
        document.getElementById('temp_max').innerHTML = w.getDetails().tempMax;
        document.getElementById('temp_min').innerHTML = w.getDetails().tempMin;
        document.getElementById('feels_like').innerHTML = w.getDetails().feelsLike;
        document.getElementById('pressure').innerHTML = w.getDetails().pressure;
        document.getElementById('humidity').innerHTML = w.getDetails().humidity;
        document.getElementById('location-full-name').innerHTML = w.getFullCityName();
        const img = document.getElementById('icon-weather');
        img.src = w.getDetails().urlIcon;
        const main = document.querySelector('main');
        main.classList.remove('hide');
        main.classList.remove('show-main');
        main.classList.add('show-main');
        displayBackgroundWeather(w.getGetMainWeather());
        Array.from(document.getElementsByClassName('mode')).forEach(element => {
            element.innerHTML = mode;
        });
    };
    return {
        displayWeather,
    };
})();
export default DisplayController;