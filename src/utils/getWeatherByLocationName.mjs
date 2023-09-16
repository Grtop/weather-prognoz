// функция ввода API ключа метеоданных и их распарсивание
const API_KEY = "09c80b589116a40b996cf95b73271f07";
//const API_KEY = "Q7pZjLcobz9aTSJKHfFD07vg5nDO8yDe";

export async function getWeatherByLocationName (loicationName) {
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${loicationName}&appid=${API_KEY}`;
//const url = `https://api.metar-taf.com/metar?api_key=API_KEY&v=2.3&locale=en-US&id=LEMD`;

const response = await fetch(url);
const data = response.json();
//возвращает массив данных о погоде с координатами по умолчанию или выбранного города
return data;
}