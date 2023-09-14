// функция распарсивания геоданных по IP адресу устройства, возвращает название города
export async function getCurrentLocationName(){
  const response = await fetch(' https://get.geojs.io/v1/ip/geo.json ');
  const data = await response.json();
  //возвращает название города по IP
  return (data.city);
}



