const apiKey = "542120ab52b8d9c6b5b26680f38d0293";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
checkWeather()