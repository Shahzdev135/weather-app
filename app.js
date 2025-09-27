document.addEventListener("DOMContentLoaded", () => {
  // Message for API source
  const message = document.createElement("p");
  message.textContent = "API: OpenWeatherMap";
  document.body.appendChild(message);

  // Vulnerable hardcoded API key
  const apiKey = "d50f91c4ae101a83074375e197121be3";

  async function getWeather(cityId, cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const weatherEl = document.getElementById(cityId);
      weatherEl.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temp: ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
        <img src="${iconUrl}" alt="Weather icon">
      `;
    } catch (error) {
      console.error("Error fetching weather:", error);
      const weatherEl = document.getElementById(cityId);
      weatherEl.textContent = "Failed to load weather data.";
    }
  }

  // Fetch both cities
  getWeather("faisalabad", "Faisalabad,PK");
  getWeather("toronto", "Toronto,CA");
});
