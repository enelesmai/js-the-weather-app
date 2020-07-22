export const WeatherDetails = (feels_like, humidity, pressure, temp, temp_max, temp_min, city, country, timezone, url_icon) => {
    return {
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        city,
        country,
        timezone,
        url_icon
    };
};
export default WeatherDetails;