#Weather Dashboard Project
#Description
This is a simple weather dashboard app that fetches real-time weather data for any city using the OpenWeatherMap API. It shows the city name, temperature, weather description, and even a cool little icon that represents the current weather (like a sun or cloud). I added some nice animations and a professional design to make it look really good.

#Features
- Search for any city to see its current weather.
- Displays:
  - City name
  - Temperature (in Celsius)
  - Weather description (like "clear sky" or "light rain")
  - Weather icon
- Clean and modern UI with animations (hover effects on the weather icon).
- Responsive design, so it looks good on desktop or mobile.
- Error handling if the city name isn’t found.

#How I Set It Up
I worked on this project using Visual Studio Code (VS Code). Here’s exactly what I did:

1. Installed Node.js: I downloaded and installed Node.js to use npm and manage dependencies.

2. Created the Project Files:

- index.html: The main file with the app's layout.
- style.css: Handles all the styling to make the site look nice.
- script.js: Contains the JavaScript for fetching weather data and updating the UI.
  
3. Used a Live Server: I installed the Live Server extension in VS Code to test the app in my browser while I worked on it.

4. Added Bootstrap: I used Bootstrap for basic styling, like the input box and buttons.

5. Integrated OpenWeatherMap API:

I signed up for a free API key on OpenWeatherMap.
I updated the script.js file with my API key to fetch data for the city entered in the search box.
Error Handling: I added a fallback in case someone enters a city name that isn’t found, like showing an alert.

6. Added Animations: For the weather icons, I added hover effects using CSS. When you hover over the icon, it grows and casts a shadow.

#How to Run the Project
1. Clone this repository: git clone https://github.com/JAudisho/weather-dashboard.git
2. Open the folder in VS Code.
3. Open index.html with Live Server (right-click on the file and select "Open with Live Server").
4. Enter a city name in the search bar and click "Search" to see the weather.
   
#Challenges
- Setting up the API was a bit tricky because I had to make sure my API key worked properly and deal with "city not found" errors.
- Figuring out how to make the design look nice without spending too much time tweaking every little thing.

#Future Plans
I want to:
- Add a 5-day weather forecast feature.
- Use geolocation to automatically show the weather for the user’s current location.
- Add unit switching between Celsius and Fahrenheit.
