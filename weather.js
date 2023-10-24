// Робота Жени
async function getApi() {
    let a = document.getElementById("city_line").value;
    let data = `https://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=${a}&days=6&aqi=no&alerts=no`;
    const response = await fetch(data);
    const result = await response.json();
    console.log(result)

    // Работа со вторым блоком

    let weather_celfl = result.current.feelslike_c;
    document.getElementById("grades-f-l").innerHTML = `${weather_celfl} °C`;
    document.getElementById("grades").innerHTML = `${weather_celfl} °C`;

    let sunrise = result.forecast.forecastday[0].astro.sunrise;
    document.getElementById("Sunrise").innerHTML = sunrise;

    let sunset = result.forecast.forecastday[0].astro.sunset;
    document.getElementById("Sunset").innerHTML = sunset;

    let Humidity = result.current.humidity;
    document.getElementById("Humidity").innerHTML = `${Humidity} %`;

    let pressure_mb = result.current.pressure_mb;
    document.getElementById("pressure_mb").innerHTML = `${pressure_mb} hPa`;

    let wind_mph = result.current.wind_mph;
    document.getElementById("wind_mph").innerHTML = `${wind_mph} km/h`;

    let uv = result.current.uv;
    document.getElementById("Uv").innerHTML = `${uv}`;



    let maintext = document.getElementById("Main_w_text")
    let mainimg = document.getElementById("Main_w_img")
    const weather = result.current.condition.text;

    const rain = "rain";
    const Rain = "Rain";

    const snow = "snow";
    const Snow = "Snow";

    const clear = "clear";
    const Clear = "Clear";

    const clouds = "overcast";
    const Clouds = "Overcast";

    const cloudy = "cloudy";
    const Cloudy = "Cloudy";

    if (weather.includes(rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain ;
    } 
    if (weather.includes(Rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain ;
    } 


    if (weather.includes(snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow ;
    } 
    if (weather.includes(Snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow ;
    } 


    if (weather.includes(Clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear ;
    } 
    if (weather.includes(clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear ;
    } 


    if (weather.includes(Clouds)) {
        mainimg.src = "./icons/clouds 1.svg";
        maintext.innerHTML = "Overcast" ;
    } 
    if (weather.includes(clouds)) {
        mainimg.src = "./icons/clouds 3.svg";
        maintext.innerHTML = "Overcast" ;
    } 
     
    if (weather.includes(cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy ;
    } 
    if (weather.includes(Cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy ;
    } 


    // все

};

