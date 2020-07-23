import { Weather } from './weather';

export const ApiController = (() => {
    const api_weather_app = 'http://api.openweathermap.org/data/2.5/weather?q=#location&appid=f3829e82bc93f1c9d497b6b667b49b50';
    const icon_server = 'http://openweathermap.org/img/wn/';
    const getWeatherAsync = (location) =>
        (async() => {
            let api_call = api_weather_app.replace(/#location/, location);
            let response = await fetch(api_call);
            let data = await response.json();
            return translateResponseToObject(data);
        })();
    const translateResponseToObject = (t) => {
        console.log("response");
        console.log(t);
        let obj = Weather(
            t.weather[0].description,
            t.main.feels_like,
            t.main.humidity,
            t.main.pressure,
            t.main.temp,
            t.main.temp_max,
            t.main.temp_min,
            t.name,
            t.sys.country,
            t.timezone,
            icon_server + t.weather[0].icon + '@2x.png',
            t.weather[0].main,
        );
        return obj;
    };
    return {
        getWeatherAsync,
        translateResponseToObject,
    };
})();

export default ApiController;