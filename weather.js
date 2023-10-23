// Робота жени
async function getApi() {
    let a = document.getElementById("city_line").value;
    let data = `https://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=${a}&days=2&aqi=no&alerts=no`;
    const response = await fetch(data);
    const result = await response.json();
    console.log(result)
};
// все

