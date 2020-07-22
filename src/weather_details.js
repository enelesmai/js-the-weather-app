export const WeatherDetails = (feels_like, humidity, pressure, temp, temp_max, temp_min, city, country, timezone) => {
    return {
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        city,
        country,
        timezone
    };
};
export default WeatherDetails;