import weather from "./weather";

const view = (() => {
  function setSearchResult(weatherData) {
    const searchResult = document.getElementById("searchResult");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    searchResult.classList.add("active");

    cityName.textContent = `${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    feelsLike.textContent = `Fells like: ${weatherData.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    wind.textContent = `Wind: ${weatherData.wind.speed} km/h`;
  }

  return { setSearchResult };
})();

export default view;
