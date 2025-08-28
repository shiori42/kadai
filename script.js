const API_KEY = '64141ee6eda578145a8e5a6b37dbc0a6'; 

const citySelect = document.getElementById('city-select');
const weatherResult = document.getElementById('weather-result');

citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value;

    if (selectedCity === '') {
        weatherResult.innerHTML = ''; 
        return;
    }

    
    getWeather(selectedCity);
});


function getWeather(city) { 
   
    const locationQuery = `${city},US`;
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${API_KEY}&units=metric&lang=ja`;

    
    fetch(url)
        .then(response => {
            
            if (!response.ok) {
                throw new Error('天気情報の取得に失敗しました。');
            }
            
            return response.json();
        })
        .then(data => {
            
            displayWeather(data);
        })
        .catch(error => {
            
            console.error('エラー:', error);
            weatherResult.innerHTML = `<p>情報の取得に失敗しました。時間をおいて再試行してください。</p>`;
        });
}


function displayWeather(data) {
    const cityName = data.name;
    let weatherIcon = data.weather[0].icon; 
    const weatherMain = data.weather[0].description;
    const temperature = data.main.temp;

    
    if (weatherIcon.endsWith('n')) {
        weatherIcon = weatherIcon.slice(0, -1) + 'd';
    }

    weatherResult.innerHTML = `
        <h2 class="city-name">${cityName}</h2>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="天気アイコン" class="weather-icon">
        <p class="weather-main">${weatherMain}</p>
        <p class="temperature">${temperature.toFixed(1)} ℃</p>
    `;
}