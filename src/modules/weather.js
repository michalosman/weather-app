const weather = (() => {
  async function getData(city) {
    try {
      if (city === "") throw new Error("Empty input");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`,
        { mode: "cors" },
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;
