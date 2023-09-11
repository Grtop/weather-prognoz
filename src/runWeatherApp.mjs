//подключение всех функций приложения
import {drawWeatherApp} from './utils/drawWeatherApp';
import {getCurrentLocationName} from './utils/getCurrentLocationName';
import {getWeatherByLocationName} from './utils/getWeatherByLocationName';
import {drawWeatherInfo} from './utils/drawWeatherInfo';


export async function runWeatherApp(el) {
  drawWeatherApp(el);

  const input = el.querySelector('input[name=cityName]');
  const form = el.querySelector('form');
  const infoWrapper = el.querySelector('.info');

  async function getAndDrawWeather(locationName) {
    try{
    const weatherData = await getWeatherByLocationName(locationName);
    drawWeatherInfo(infoWrapper, weatherData);
    } catch(getAndDrawWeatherError) {
      console.error({getAndDrawWeatherError});
      infoWrapper.innerHTML='Введите правильное название города';
    }
  }

  /*myMap.events.add('submit', async (ev) => {
    // Получение координат щелчка
    const coords = e.get('coords');
    // Плавное перемещение центра карты на координаты щелчка
    myMap.panTo(coords, {
        flying: true,
        duration: 1000
    });
});*/

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    getAndDrawWeather(input.value);
  }
  );
  const currentLocationName = await getCurrentLocationName();
  getAndDrawWeather(currentLocationName);
}
