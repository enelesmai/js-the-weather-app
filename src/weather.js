import { WeatherDetails } from './weather_details';
export const Weather = (general_desc, feels_like, humidity, pressure, temp, temp_max, temp_min) => {
    const details = WeatherDetails(feels_like, humidity, pressure, temp, temp_max, temp_min);
    const getGeneralDescripcion = () => general_desc;
    const getDetails = () => details;
    return {
        getGeneralDescripcion,
        getDetails,
    };
};
export default Weather;