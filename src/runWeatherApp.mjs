//подключение всех функций приложения
import {drawWeatherApp} from './utils/drawWeatherApp';
import {getCurrentLocationName} from './utils/getCurrentLocationName';
import {getWeatherByLocationName} from './utils/getWeatherByLocationName';
import {drawWeatherInfo} from './utils/drawWeatherInfo';


export async function runWeatherApp(el) {
  drawWeatherApp(el);
//получаем элемент DOM по селектору
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

  form.addEventListener('submit', async (ev) => {
    //событие не должно выполняться по умолчанию, вся форма не перерисовывается
    ev.preventDefault();
    getAndDrawWeather(input.value);
  }
  );
  const currentLocationName = await getCurrentLocationName();
  getAndDrawWeather(currentLocationName);
}
