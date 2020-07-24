import { Weather } from './weather';

export const ApiController = (() => {
  const apiWeatherApp = 'http://api.openweathermap.org/data/2.5/weather?q=#location&appid=f3829e82bc93f1c9d497b6b667b49b50';
  const iconServer = 'http://openweathermap.org/img/wn/';
  const translateResponseToObject = (t) => {
    const obj = Weather(
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
      `${iconServer + t.weather[0].icon}@2x.png`,
      t.weather[0].main,
    );
    return obj;
  };
  const getWeatherAsync = (location, mode) => (async () => {
    const apiCall = apiWeatherApp.replace(/#location/, location) + (mode === 'C' ? '&units=metric' : '');
    const response = await fetch(apiCall);
    const data = await response.json();
    return translateResponseToObject(data);
  })();
  return {
    getWeatherAsync,
    translateResponseToObject,
  };
})();

export default ApiController;