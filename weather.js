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


//Alisa


async function weaterHour(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat6 = result.forecast.forecastday[0].hour[6].condition.text;
    console.log(weat6)

    let weat1 = document.getElementById('weat1');

    let t1 = document.getElementById('t1');
    t1.innerHTML = result.forecast.forecastday[0].hour[6].temp_c + '°C';
    let w1 = document.getElementById('w1');
    w1.innerHTML = result.forecast.forecastday[0].hour[6].wind_kph + ' km/h';

    let windKm6 = result.forecast.forecastday[0].hour[6].wind_dir;
    let windKm1 = document.getElementById('wind-km1')

    switch (windKm6){
        case 'SSW':
            windKm1.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm1.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm1.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm1.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm1.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm1.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm1.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm1.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm1.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm1.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm1.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm1.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm1.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm1.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm1.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm1.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }
    
    switch(weat6) {
        case 'Cloudy':
            weat1.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat1.src = "./icons/drizzle 2.svg";
            break;
        case 'Sunny':
            weat1.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat1.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat1.src = "./icons/mist 2.svg";
            break;
            case 'Smoke':
            weat1.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat1.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat1.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat1.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat1.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat1.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat1.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour2(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat9 = result.forecast.forecastday[0].hour[9].condition.text;
    console.log(weat9)

    let weat2 = document.getElementById('weat2');

    let t2 = document.getElementById('t2');
    t2.innerHTML = result.forecast.forecastday[0].hour[9].temp_c + '°C';
    let w2 = document.getElementById('w2');
    w2.innerHTML = result.forecast.forecastday[0].hour[9].wind_kph + ' km/h';
    
    let windKm9 = result.forecast.forecastday[0].hour[9].wind_dir;
    let windKm2 = document.getElementById('wind-km2')

    switch (windKm9){
        case 'SSW':
            windKm2.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm2.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm2.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm2.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm2.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm2.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm2.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm2.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm2.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm2.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm2.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm2.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm2.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm2.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm2.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm2.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat9) {
        case 'Cloudy':
            weat2.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat2.src = "./icons/drizzle 2.svg";
            break;
        case 'Sunny':
            weat2.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat2.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat2.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat2.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat2.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat2.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat2.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat2.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat2.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat2.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour3(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat12 = result.forecast.forecastday[0].hour[12].condition.text;
    console.log(weat12)

    let weat3 = document.getElementById('weat3');

    let t3 = document.getElementById('t3');
    t3.innerHTML = result.forecast.forecastday[0].hour[12].temp_c + '°C';
    let w3 = document.getElementById('w3');
    w3.innerHTML = result.forecast.forecastday[0].hour[12].wind_kph + ' km/h';
    
    let windKm12 = result.forecast.forecastday[0].hour[12].wind_dir;
    let windKm3 = document.getElementById('wind-km3')

    switch (windKm12){
        case 'SSW':
            windKm3.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm3.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm3.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm3.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm3.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm3.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm3.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm3.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm3.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm3.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm3.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm3.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm3.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm3.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm3.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm3.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }
    
    switch(weat12) {
        case 'Cloudy':
            weat3.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat3.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat3.src = "./icons/drizzle 2.svg";
            break; 
        case 'Sunny':
            weat3.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat3.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat3.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat3.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat3.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat3.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat3.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat3.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat3.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat3.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour4(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat15 = result.forecast.forecastday[0].hour[15].condition.text;
    console.log(weat15)

    let weat4 = document.getElementById('weat4');

    let t4 = document.getElementById('t4');
    t4.innerHTML = result.forecast.forecastday[0].hour[15].temp_c + '°C';
    let w4 = document.getElementById('w4');
    w4.innerHTML = result.forecast.forecastday[0].hour[15].wind_kph + ' km/h';
    
    let windKm15 = result.forecast.forecastday[0].hour[15].wind_dir;
    let windKm4 = document.getElementById('wind-km4')

    switch (windKm15){
        case 'SSW':
            windKm4.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm4.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm4.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm4.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm4.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm4.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm4.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm4.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm4.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm4.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm4.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm4.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm4.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm4.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm4.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm4.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat15) {
        case 'Cloudy':
            weat4.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat4.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat4.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat4.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat4.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat4.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat4.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat4.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat4.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat4.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat4.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat4.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat4.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour5(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat18 = result.forecast.forecastday[0].hour[18].condition.text;
    console.log(weat18)

    let weat5 = document.getElementById('weat5');

    let t5 = document.getElementById('t5');
    t5.innerHTML = result.forecast.forecastday[0].hour[18].temp_c + '°C';
    let w5 = document.getElementById('w5');
    w5.innerHTML = result.forecast.forecastday[0].hour[18].wind_kph + ' km/h';
    
    let windKm18 = result.forecast.forecastday[0].hour[18].wind_dir;
    let windKm5 = document.getElementById('wind-km5')

    switch (windKm18){
        case 'SSW':
            windKm5.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm5.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm5.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm5.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm5.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm5.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm5.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm5.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm5.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm5.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm5.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm5.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm5.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm5.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm5.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm5.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat18) {
        case 'Cloudy':
            weat5.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat5.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat5.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat5.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat5.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat5.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat5.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat5.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat5.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat5.src = "./icons/rain 2.svg";
            break;  
        case 'Clear':
            weat5.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat5.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat5.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};


async function weaterHour6(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat15 = result.forecast.forecastday[0].hour[15].condition.text;
    console.log(weat15)

    let weat6 = document.getElementById('weat6');

    let t6 = document.getElementById('t6');
    t6.innerHTML = result.forecast.forecastday[0].hour[15].temp_c + '°C';
    let w6 = document.getElementById('w6');
    w6.innerHTML = result.forecast.forecastday[0].hour[15].wind_kph + ' km/h';
    
    let windKm15 = result.forecast.forecastday[0].hour[15].wind_dir;
    let windKm6 = document.getElementById('wind-km6')

    switch (windKm15){
        case 'SSW':
            windKm6.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm6.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm6.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm6.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm6.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm6.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm6.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm6.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm6.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm6.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm6.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm6.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm6.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm6.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm6.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm6.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat15) {
        case 'Cloudy':
            weat6.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat6.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat6.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat6.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat6.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat6.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat6.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat6.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat6.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat6.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat6.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat6.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat6.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour7(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat18 = result.forecast.forecastday[0].hour[18].condition.text;
    console.log(weat18)

    let weat7 = document.getElementById('weat7');

    let t7 = document.getElementById('t7');
    t7.innerHTML = result.forecast.forecastday[0].hour[18].temp_c + '°C';
    let w7 = document.getElementById('w7');
    w7.innerHTML = result.forecast.forecastday[0].hour[18].wind_kph + ' km/h';
    
    let windKm18 = result.forecast.forecastday[0].hour[18].wind_dir;
    let windKm7 = document.getElementById('wind-km7')

    switch (windKm18){
        case 'SSW':
            windKm7.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm7.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm7.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm7.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm7.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm7.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm7.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm7.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm7.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm7.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm7.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm7.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm7.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm7.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm7.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm7.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat18) {
        case 'Cloudy':
            weat7.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat7.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat7.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat7.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat7.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat7.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat7.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat7.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat7.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat7.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat7.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat7.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat7.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour8(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat21 = result.forecast.forecastday[0].hour[21].condition.text;
    console.log(weat21)

    let weat8 = document.getElementById('weat8');

    let t8 = document.getElementById('t8');
    t8.innerHTML = result.forecast.forecastday[0].hour[21].temp_c + '°C';
    let w8 = document.getElementById('w8');
    w8.innerHTML = result.forecast.forecastday[0].hour[21].wind_kph + ' km/h';
    
    let windKm21 = result.forecast.forecastday[0].hour[21].wind_dir;
    let windKm8 = document.getElementById('wind-km8')

    switch (windKm21){
        case 'SSW':
            windKm8.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm8.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm8.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm8.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm8.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm8.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm8.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm8.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm8.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm8.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm8.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm8.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm8.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm8.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm8.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm8.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat21) {
        case 'Cloudy':
            weat8.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat8.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat8.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat8.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat8.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat8.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat8.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat8.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat8.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat8.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat8.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat8.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat8.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour9(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat0 = result.forecast.forecastday[0].hour[0].condition.text;
    console.log(weat0)

    let weat9 = document.getElementById('weat9');

    let t9 = document.getElementById('t9');
    t9.innerHTML = result.forecast.forecastday[0].hour[0].temp_c + '°C';
    let w9 = document.getElementById('w9');
    w9.innerHTML = result.forecast.forecastday[0].hour[0].wind_kph + ' km/h';
    
    let windKm0 = result.forecast.forecastday[0].hour[0].wind_dir;
    let windKm9 = document.getElementById('wind-km9')

    switch (windKm0){
        case 'SSW':
            windKm9.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm9.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm9.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm9.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm9.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm9.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm9.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm9.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm9.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm9.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm9.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm9.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm9.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm9.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm9.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm9.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat0) {
        case 'Cloudy':
            weat9.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat9.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat9.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat9.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat9.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat9.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat9.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat9.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat9.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat9.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat9.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat9.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat9.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};

async function weaterHour10(){
    let api = `http://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=London&days=1&aqi=yes&alerts=yes
    `;
    const response = await fetch(api);
    const result = await response.json();
    let weat3 = result.forecast.forecastday[0].hour[3].condition.text;
    console.log(weat3)

    let weat10 = document.getElementById('weat10');

    let t10 = document.getElementById('t10');
    t10.innerHTML = result.forecast.forecastday[0].hour[3].temp_c + '°C';
    let w10 = document.getElementById('w10');
    w10.innerHTML = result.forecast.forecastday[0].hour[3].wind_kph + ' km/h';
    
    let windKm3 = result.forecast.forecastday[0].hour[3].wind_dir;
    let windKm10 = document.getElementById('wind-km10')

    switch (windKm3){
        case 'SSW':
            windKm10.src = "./icons/navigation 5.png";
            break;
        case 'SW':
            windKm10.src = "./icons/navigation 5.png";
            break;
        case 'WSW':
            windKm10.src = "./icons/navigation 5.png";
            break;
        case 'W':
            windKm10.src = "./icons/navigation 8.png";
            break;
        case 'WNW':
            windKm10.src = "./icons/navigation 2.png";
            break;
        case 'NW':
            windKm10.src = "./icons/navigation 2.png";
            break;
        case 'NNW':
            windKm10.src = "./icons/navigation 2.png";
            break;
        case 'N':
            windKm10.src = "./icons/navigation 1.svg";
            break;
        case 'NNE':
            windKm10.src = "./icons/navigation 4.png";
            break;
        case 'NE':
            windKm10.src = "./icons/navigation 4.png";
            break;
        case 'ENE':
            windKm10.src = "./icons/navigation 4.png";
            break;
        case 'E':
            windKm10.src = "./icons/navigation 3.png";
            break;
        case 'ESE':
            windKm10.src = "./icons/navigation 6.png";
            break;
        case 'SE':
            windKm10.src = "./icons/navigation 6.png";
            break;
        case 'SSE':
            windKm10.src = "./icons/navigation 6.png";
            break;
        case 'S':
            windKm10.src = "./icons/navigation 7.png";
            break;
        default:
            console.log('error'); 
    }

    switch(weat3) {
        case 'Cloudy':
            weat10.src = "./icons/clouds 2.png";
            break;
        case 'Drizzle':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Rain':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy rain possible':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Patchy light drizzle':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain shower':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Light rain':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Thundery outbreaks possible':
            weat10.src = "./icons/drizzle 2.svg";
            break;
        case 'Light drizzle':
            weat10.src = "./icons/drizzle 2.svg";
            break;    
        case 'Sunny':
            weat10.src = "./icons/clear 3.svg";
            break;
        case 'Mist':
            weat10.src = "./icons/mist 2.svg";
            break;
        case 'Fog':
            weat10.src = "./icons/mist 2.svg";
            break;
        case 'Smoke':
            weat10.src = "./icons/mist 2.svg";
            break;
        case 'Snow':
            weat10.src = "./icons/rain 2.svg";
            break;
        case 'Partly cloudy':
            weat10.src = "./icons/clouds 2.png";
            break;
        case 'Moderate rain':
            weat10.src = "./icons/rain 2.svg";
            break;
        case 'Clear':
            weat10.src = "./icons/clear 3.svg";
            break;
        case 'Overcast':
            weat10.src = "./icons/clouds 2.png";
            break;
        case 'Moderate or heavy rain shower':
            weat10.src = "./icons/rain 2.svg";
            break;
        default:
            console.log('error');        
        }
};


weaterHour();
weaterHour2();
weaterHour3();
weaterHour4();
weaterHour5();

weaterHour6();
weaterHour7();
weaterHour8();
weaterHour9();
weaterHour10();
