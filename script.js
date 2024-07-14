// Replace with your own API key from OpenWeatherMap
const apiKey = '84ab0b621aa92cb2ed9236912974b4bc';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    try {
        const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle error, show error message to the user
        document.getElementById('city').textContent = 'City not found';
        document.getElementById('temperature').textContent = '-- °C';
        document.getElementById('description').textContent = '';
        document.getElementById('humidity').textContent = 'Humidity: --%';
    }
}

// Function to display weather data
function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('city').textContent = cityName;
    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('description').textContent = weatherDescription;
    document.getElementById('humidity').textContent = `${humidity} %`;
}
