// функция ввода API ключа метеоданных и их распарсивание
const API_KEY = "09c80b589116a40b996cf95b73271f07";

export async function getWeatherByLocationName (loicationName) {
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${loicationName}&appid=${API_KEY}`;

const response = await fetch(url);
const data = response.json();

return data;
}