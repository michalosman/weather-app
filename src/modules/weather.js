const weather = (() => {
  async function getData(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`,
      { mode: "cors" },
    );
    const data = await response.json();
    return data;
  }

  return { getData };
})();

export default weather;
