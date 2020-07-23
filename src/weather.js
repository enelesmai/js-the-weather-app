import { WeatherDetails } from './weather_details';

export const Weather = (
  generalDesc,
  feelsLike,
  humidity,
  pressure,
  temp,
  tempMax,
  tempMin,
  city,
  country,
  timezone,
  urlIcon,
  main,
) => {
  const details = WeatherDetails(
    feelsLike,
    humidity,
    pressure,
    temp,
    tempMax,
    tempMin,
    city,
    country,
    timezone,
    urlIcon,
    main,
  );
  let mode = 'F';
  const changeDisplayMode = (_mode) => {
    if (mode !== _mode) {
      mode = _mode;
    }
  };
  const getGeneralDescripcion = () => generalDesc;
  const getGetMainWeather = () => main;
  const getDetails = () => details;
  const getFullCityName = () => `${details.city}, ${details.country}`;
  return {
    getGeneralDescripcion,
    getDetails,
    getFullCityName,
    getGetMainWeather,
    changeDisplayMode,
    mode,
  };
};
export default Weather;