/* Параметры определения местоположения и масштабирования для карты */
let mapOptions = {
  center: [ 55.45, 37.37],
  zoom: 10
};

/* Построить объект карты */
let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

/* Изменить курсор на карте на крестик */
L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');

/* Для извлечения координат, разделенных на Долготу и Широту */
let marker = null;
map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

    document.getElementById('longitude').value = event.latlng.lng;
    document.getElementById('latitude').value = event.latlng.lat;
    
})
