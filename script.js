let map;
let mapa = document.getElementById('mapa')
let interacao = document.getElementById('interacao')
let interacaoPc = document.getElementById('interacao-pc')
let fechar = document.getElementById('fechar')


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

            iconSize: [40, 55], // size of the icon

        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [40, 55] // size of the icon

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

            <label for="floatingInput">NOME:</label> Rio Poty Music
            <br>
            <label for="floatingInput">INSTAGRAM:</label> <a href="">Rio Poty Shopping</a>
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> Ensinam a tocar violão
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> Rua Inventei agora 
            <br>
            <label for="floatingInput">DIAS DE FUNCIONAMENTO:</label> Sábado
            <br>
            <br>
            <div class="text-center">
              <label for="floatingInput">CADASTRE-SE:</label>
              <br>
              <a id="cadastro" href="formularios/cadastro-user.html"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a>
        
            </div>
        
            
          </div>
      `
        
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

            iconSize: [40, 55], // size of the icon


        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/imgbin-walter-white-jesse-pinkma-sem-fundo.png',

            iconSize: [40, 55] // size of the icon

        });        //L.marker([pos.coords.latitude, pos.coords.longitude], {icon: greenIcon}).addTo(map)
        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let exemploTeresinaShopping = L.marker([-5.085214764199299, -42.790233716834045]).addTo(map)
            .bindPopup('TERESINA SHOPPING');

        let exemploRioPoty = L.marker([-5.0686491, -42.7937858], { icon: violaoIcon }).addTo(map)
            .bindPopup('SHOPPING RIO POTY');


        exemploRioPoty.on('click', function () {
            interacao.innerHTML = `
            <div class="interacao-config">

    <label for="floatingInput">NOME:</label> Rio Poty Music
    <br>
    <label for="floatingInput">INSTAGRAM:</label> <a href="">Rio Poty Shopping</a>
    <br>
    <label for="floatingInput">O QUE ELES FAZEM:</label> Ensinam a tocar violão
    <br>
    <label for="floatingInput">LOCALIZAÇÃ:</label> Rua Inventei agora 
    <br>
    <label for="floatingInput">DIAS DE FUNCIONAMENTO:</label> Sábado
    <br>
    <br>
    <div class="text-center">
      <label for="floatingInput">CADASTRE-SE:</label>
      <br>
      <a id="cadastro" href="formularios/cadastro-user.html"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a>

    </div>

    
  </div>
          `
            
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

}