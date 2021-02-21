import weather from "./weather";

const view = (() => {
  // const searchResult = document.getElementById("searchResult");

  function setSearchResult(weatherData) {
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    console.log(weatherData);

    cityName.textContent = `${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    feelsLike.textContent = `Fells like: ${weatherData.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    wind.textContent = `Wind: ${weatherData.wind.speed} km/h`;
  }

  return { setSearchResult };
})();

export default view;
