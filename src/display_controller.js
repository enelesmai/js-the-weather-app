export const DisplayController = (() => {
  const displayBackgroundWeather = (weather) => {
    const img = document.getElementById('card-current');
    const scenes = ['thunderstorm', 'drizzle', 'rain', 'snow', 'clear', 'clouds'];
    let found = false;
    scenes.forEach(element => {
      if (weather.toLowerCase().includes(element)) {
        img.style.backgroundImage = `url('/src/img/${element}.jpg')`;
        found = true;
      }
    });
    if (!found) {
      img.style.backgroundImage = "url('/src/img/athmosphere.jpg')";
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