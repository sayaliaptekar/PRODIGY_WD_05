document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  const apiKey = "58f85b62d46da84a2d17458d61346b5d";  // 🔑 Replace with your OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡 Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>🌥 Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
