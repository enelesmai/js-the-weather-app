import { WeatherDetails } from './weather_details';
export const Weather = (general_desc, feels_like, humidity, pressure, temp, temp_max, temp_min, city, country, timezone, url_icon, main) => {
    const details = WeatherDetails(feels_like, humidity, pressure, temp, temp_max, temp_min, city, country, timezone, url_icon, main);
    const getGeneralDescripcion = () => general_desc;
    const getGetMainWeather = () => main;
    const getDetails = () => details;
    const getFullCityName = () => details.city + ", " + details.country;
    return {
        getGeneralDescripcion,
        getDetails,
        getFullCityName,
        getGetMainWeather,
    };
};
export default Weather;