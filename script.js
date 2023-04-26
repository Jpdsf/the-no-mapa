let map;
let interacao = document.getElementById('interacao')
let interacaoPc = document.getElementById('interacao-pc')


/*var md = new MobileDetect(window.navigator.userAgent);
if (md.MobileDetect()) {
    console.log('Mobile')
    function sucess(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);

        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

        //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });


        //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let exemploTeresinaShopping = L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
            .bindPopup('TERESINA SHOPPING');

        let exemploRioPoty = L.marker([-5.0686491, -42.7937858], { icon: violaoIcon }).addTo(map)
            .bindPopup('SHOPPING RIO POTY');


        exemploRioPoty.on('click', function () {
            interacao.innerHTML = `<div class="interacao-config">
        <label for="floatingInput">Nome:</label> Rio Poty Music
        <br>
        <label for="floatingInput">Instagran:</label> <a href="">Rio Poty Shopping</a>
        <br>
        <label for="floatingInput">O que eles fazem:</label> Ensinam a tocar violão
        <br>
        <label for="floatingInput">Localização:</label> Rua Inventei agora 
        <br>
        <label for="floatingInput">Dias de funcionamento:</label> Sábado
      </div>`

        });

        localizacaoPessoa.on('click', function () {
            interacao.innerHTML = ``

        });

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


} else {
    console.log('pc')

    let map;
    let interacao = document.getElementById('interacao')

    function sucess(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);

        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

        //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });


        //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let exemploTeresinaShopping = L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
            .bindPopup('TERESINA SHOPPING');

        let exemploRioPoty = L.marker([-5.0686491, -42.7937858], { icon: violaoIcon }).addTo(map)
            .bindPopup('SHOPPING RIO POTY');


        exemploRioPoty.on('click', function () {
            interacaoPc.innerHTML = `<div class="interacao-config">
        <label for="floatingInput">Nome:</label> Rio Poty Music
        <br>
        <label for="floatingInput">Instagran:</label> <a href="">Rio Poty Shopping</a>
        <br>
        <label for="floatingInput">O que eles fazem:</label> Ensinam a tocar violão
        <br>
        <label for="floatingInput">Localização:</label> Rua Inventei agora 
        <br>
        <label for="floatingInput">Dias de funcionamento:</label> Sábado
      </div>`

        });

        localizacaoPessoa.on('click', function () {
            interacaoPc.innerHTML = ``

        });

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


}*/

if (WURFL.form_factor === 'Desktop') {
    
    

    function sucess(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);

        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

        //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });


        //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let exemploTeresinaShopping = L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
            .bindPopup('TERESINA SHOPPING');

        let exemploRioPoty = L.marker([-5.0686491, -42.7937858], { icon: violaoIcon }).addTo(map)
            .bindPopup('SHOPPING RIO POTY');


        exemploRioPoty.on('click', function () {
            interacaoPc.innerHTML = `<div class="interacao-config">
        <label for="floatingInput">Nome:</label> Rio Poty Music
        <br>
        <label for="floatingInput">Instagran:</label> <a href="">Rio Poty Shopping</a>
        <br>
        <label for="floatingInput">O que eles fazem:</label> Ensinam a tocar violão
        <br>
        <label for="floatingInput">Localização:</label> Rua Inventei agora 
        <br>
        <label for="floatingInput">Dias de funcionamento:</label> Sábado
      </div>`

        });

        localizacaoPessoa.on('click', function () {
            interacaoPc.innerHTML = ``

        });

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




} else {
    console.log('mobile')
    function sucess(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);

        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

        //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [30, 45], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76]

        });


        //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let exemploTeresinaShopping = L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
            .bindPopup('TERESINA SHOPPING');

        let exemploRioPoty = L.marker([-5.0686491, -42.7937858], { icon: violaoIcon }).addTo(map)
            .bindPopup('SHOPPING RIO POTY');


        exemploRioPoty.on('click', function () {
            interacao.innerHTML = `<div class="interacao-config">
        <label for="floatingInput">Nome:</label> Rio Poty Music
        <br>
        <label for="floatingInput">Instagran:</label> <a href="">Rio Poty Shopping</a>
        <br>
        <label for="floatingInput">O que eles fazem:</label> Ensinam a tocar violão
        <br>
        <label for="floatingInput">Localização:</label> Rua Inventei agora 
        <br>
        <label for="floatingInput">Dias de funcionamento:</label> Sábado
      </div>`

        });

        localizacaoPessoa.on('click', function () {
            interacao.innerHTML = ``

        });

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
}