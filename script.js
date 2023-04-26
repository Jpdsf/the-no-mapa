let map;

function sucess(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);

    if (map === undefined) {
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);
    } else {
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);
    }
    let violaoIcon = L.icon({
        iconUrl: 'img/violao-icon-sem-fundo.png',

        iconSize: [30, 45], // size of the icon
        
    });



    //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
        //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Sua localização')
        .openPopup();

    L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
        .bindPopup('TERESINA SHOPPING')
        .openPopup();

    L.marker([-5.0686491, -42.7937858], {icon: violaoIcon}).addTo(map)
        .bindPopup('SHOPPING RIO POTY')
        .openPopup();














}

function error(err) {
    console.log(err)
}

let wathID = navigator.geolocation.watchPosition(sucess, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

var greenIcon = L.icon({
    iconUrl: 'pngtree-red-gradient-positioning.png',

    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});













