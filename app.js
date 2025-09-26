document.addEventListener("DOMContentLoaded", () => {
  const message = document.createElement("p");
  message.textContent = "Hello from JavaScript!";
  document.body.appendChild(message);

  async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // We'll replace this with GitHub Secrets later
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  getWeather();
});
