const YANDEX_API_KEY = 'e262e3b3-7e57-43dc-8bac-de380aa7f6c1';

export function drawWeatherInfo (el, data) {
 const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

 el.innerHTML=`
 <h2>${data.name}</h2>
 <div>Weather:${data.weather[0].main} - ${data.weather[0].description}</div>
 <div>Temp: ${data.main.temp}&#8451 feels-like: ${data.main.feels_like}&#8451</div>
 <div>Humidity: ${data.main.humidity}%</div>
 <div>Wind: ${data.wind.speed} m/s ${data.wind.deg} град</div>
 <div>Visibility: ${data.visibility} m</div>
 <image src='${mapUrl}' />
 `;
}