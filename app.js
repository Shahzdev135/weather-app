document.addEventListener("DOMContentLoaded", () => {
  const message = document.createElement("p");
  message.textContent = "Hello from JavaScript!";
  document.body.appendChild(message);

  async function getWeather() {
    const apiKey = "d50f91c4ae101a83074375e197121be3"; // Replace later with GitHub Secret
    const city = "Faisalabad,PK";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const weatherEl = document.getElementById("weather");
      weatherEl.textContent = `City: ${data.name}, Temp: ${data.main.temp}°C, ${data.weather[0].description}`;

    } catch (error) {
      console.error("Error fetching weather:", error);
      const weatherEl = document.getElementById("weather");
      weatherEl.textContent = "Failed to load weather data.";
    }
  }

  getWeather();
});
