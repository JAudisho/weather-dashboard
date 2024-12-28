const API_KEY = "777bf9982d33db858c52bb5b194d022b"; // Replace with your OpenWeatherMap API key

// Fetch weather data
const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    // First API call without country code
    const response = await fetch(url);
    if (!response.ok) {
      // If city is not found, try appending ",US" (United States)
      const responseWithCountry = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${API_KEY}&units=metric`
      );
      if (!responseWithCountry.ok) throw new Error("City not found");
      const dataWithCountry = await responseWithCountry.json();
      displayWeather(dataWithCountry);
    } else {
      const data = await response.json();
      displayWeather(data);
    }
  } catch (error) {
    alert(error.message);
  }
};

// Add event listener to search button
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

// Display weather data
const displayWeather = (data) => {
  const cityName = data.name;
  const temperature = `${data.main.temp}°C`;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon; // Get weather icon code

  // Update UI elements with fetched data
  document.getElementById("city-name").textContent = cityName;
  document.getElementById("temperature").textContent = `Temperature: ${temperature}`;
  document.getElementById("description").textContent = `Weather: ${description}`;
  document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("weather-result").classList.remove("d-none");
};
