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

        let musicaParaTodos = L.marker([-5.080293661150606, -42.77629429380992], { icon: violaoIcon }).addTo(map)
        .bindPopup('MÚSICA PARA TODOS');

        let palacioDaMusica = L.marker([-5.097176221125296, -42.81075604962941], { icon: violaoIcon }).addTo(map)
        .bindPopup('PALÁCIO DA MÚSICA');

        let escolaMusicaDonaGal = L.marker([-5.066833962379359, -42.82844716931162], { icon: violaoIcon }).addTo(map)
        .bindPopup('ESCOLA de música DONA GAL');


        /*exemploRioPoty.on('click', function () {
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
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >CADASTRE-SE:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="formularios/cadastro-user.html"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
              </div>
        
            </div>
          </div>
      `

        });*/



        musicaParaTodos.on('click', function () {
            interacaoPc.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> Musica Para Todos
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> É um movimento de Arte-Educação através da música. Fundado em maio de 1999, <br> atende prioritariamente crianças e adolescentes que estejam cursando o ensino básico, além de jovens, adultos e idosos do município de Teresina e cidades vizinhas.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> Av. Pedro Almeida, 145 - São Cristóvão, Teresina - PI, 64052-280
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://instagram.com/musicaparatodospi?igshid=MzRlODBiNWFlZA=="><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
                <div><a class="cadastro redes-contato" href="https://mobile.facebook.com/musicaparatodospi?_rdc=1&_rdr&refsrc=deprecated"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" srcset="">Facebook</a></div>
              </div>
            </div>
          </div>
                `
        });

        palacioDaMusica.on('click', function(){
            interacaoPc.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> Palácio da Música
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> O Palácio da Música é um espaço mantido pela Prefeitura de Teresina, através da Fundação Municipal de Cultura Monsenhor Chaves.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> R. Santa Luzia, 1241 - Centro (Sul), Teresina - PI, 64001-400
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://www.instagram.com/palaciodamusica/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
              </div>
            </div>
          </div>`
        })

        escolaMusicaDonaGal.on('click', function(){
            interacaoPc.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> ESCOLA  de música DONA GAL
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> Escola Musical.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> Escola de música Dona Gal - R. Rui Barbosa, 3101 - São Joaquim, Teresina - PI, 64002-180
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://instagram.com/donagalescolademusica"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
              </div>
            </div>
          </div>`
        })

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


        let musicaParaTodos = L.marker([-5.080293661150606, -42.77629429380992], { icon: violaoIcon }).addTo(map)
        .bindPopup('MÚSICA PARA TODOS');

        let palacioDaMusica = L.marker([-5.097176221125296, -42.81075604962941], { icon: violaoIcon }).addTo(map)
        .bindPopup('PALÁCIO DA MÚSICA');

        let escolaMusicaDonaGal = L.marker([-5.066833962379359, -42.82844716931162], { icon: violaoIcon }).addTo(map)
        .bindPopup('ESCOLA de música DONA GAL');


        /*exemploRioPoty.on('click', function () {
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
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >CADASTRE-SE:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="formularios/cadastro-user.html"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
              </div>
        
            </div>
          </div>
      `

        });*/



        musicaParaTodos.on('click', function () {
            interacao.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> Musica Para Todos
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> É um movimento de Arte-Educação através da música. Fundado em maio de 1999, <br> atende prioritariamente crianças e adolescentes que estejam cursando o ensino básico, além de jovens, adultos e idosos do município de Teresina e cidades vizinhas.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> Av. Pedro Almeida, 145 - São Cristóvão, Teresina - PI, 64052-280
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://instagram.com/musicaparatodospi?igshid=MzRlODBiNWFlZA=="><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
                <div><a class="cadastro redes-contato" href="https://mobile.facebook.com/musicaparatodospi?_rdc=1&_rdr&refsrc=deprecated"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" srcset="">Facebook</a></div>
              </div>
            </div>
          </div>
                `
        });

        palacioDaMusica.on('click', function(){
            interacao.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> Palácio da Música
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> O Palácio da Música é um espaço mantido pela Prefeitura de Teresina, através da Fundação Municipal de Cultura Monsenhor Chaves.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> R. Santa Luzia, 1241 - Centro (Sul), Teresina - PI, 64001-400
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://www.instagram.com/palaciodamusica/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
              </div>
            </div>
          </div>`
        })

        escolaMusicaDonaGal.on('click', function(){
            interacao.innerHTML = `<div class="interacao-config">

            <label for="floatingInput">NOME:</label> ESCOLA  de música DONA GAL
            <br>
            <label for="floatingInput">O QUE ELES FAZEM:</label> Escola Musical.
            <br>
            <label for="floatingInput">LOCALIZAÇÃ:</label> Escola de música Dona Gal - R. Rui Barbosa, 3101 - São Joaquim, Teresina - PI, 64002-180
            <br>
            <br>
            <div class="text-center" >
              <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
              <br>
              <div>
                <div><a class="cadastro redes-contato" href="https://instagram.com/donagalescolademusica"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>
                <br>
              </div>
            </div>
          </div>`
        })

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