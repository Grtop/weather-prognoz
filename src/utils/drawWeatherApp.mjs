//функция DOM отрисовки поля ввода и поля метеоинформации
export function drawWeatherApp(wrapperEl){
  wrapperEl.innerHTML = `
  <h1>Weater From </h1>
  <div class='tablo'>
  <form class='form'>
  <input name='cityName' required autofocus />
  <button class='button'> Show weather </button>
  </form>
  
  <div class='info'></div>
  </div>
  `;
}