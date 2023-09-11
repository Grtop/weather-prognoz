export async function getMapFly(){
    const myMap = new getMapFly('map', {
        center: [55.76, 37.64],
        zoom: 10});
    //const coords = ev.get(data.city);

    myMap.events.add('submit', function (ev) {
        // Получение координат щелчка
        const coords = ev.get(data.city);
        // Плавное перемещение центра карты на координаты щелчка
        myMap.panTo(coords, {
            flying: true,
            duration: 1000
        });
    });
}