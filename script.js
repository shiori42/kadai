// ★★★★★ここに自分のAPIキーを貼り付けてください★★★★★
const API_KEY = '64141ee6eda578145a8e5a6b37dbc0a6'; 

const citySelect = document.getElementById('city-select');
const weatherResult = document.getElementById('weather-result');

// ドロップダウンで都市が選択されたときの処理
citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value;

    if (selectedCity === '') {
        weatherResult.innerHTML = ''; // 何も選択されていなければ結果をクリア
        return;
    }

    // 天気情報をAPIから取得する関数を呼び出す
    getWeather(selectedCity);
});

// 天気情報をAPIから取得する関数
function getWeather(city) {
    // APIに送るURLを作成
    // units=metric をつけると、気温が摂氏（℃）になります
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    // fetchを使ってAPIにリクエストを送信
    fetch(url)
        .then(response => {
            // レスポンスが正常でなければエラーを投げる
            if (!response.ok) {
                throw new Error('天気情報の取得に失敗しました。');
            }
            // レスポンスをJSON形式に変換
            return response.json();
        })
        .then(data => {
            // 取得したデータを使って画面表示を更新する関数を呼び出す
            displayWeather(data);
        })
        .catch(error => {
            // エラーが発生した場合の処理
            console.error('エラー:', error);
            weatherResult.innerHTML = `<p>情報の取得に失敗しました。時間をおいて再試行してください。</p>`;
        });
}

// 取得したデータを使って画面表示を更新する関数
function displayWeather(data) {
    const cityName = data.name;
    const weatherIcon = data.weather[0].icon;
    const weatherMain = data.weather[0].description;
    const temperature = data.main.temp;

    // 表示するHTMLを組み立て
    weatherResult.innerHTML = `
        <h2 class="city-name">${cityName}</h2>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="天気アイコン" class="weather-icon">
        <p class="weather-main">${weatherMain}</p>
        <p class="temperature">${temperature.toFixed(1)} ℃</p>
    `;
}