let map;
let mapa = document.getElementById('mapa')
let interacao = document.getElementById('interacao')
let interacaoPc = document.getElementById('interacao-pc')
let fechar = document.getElementById('fechar')

let pessoa = {
  nomeProjeto: '',
  objProjeto: '',
  localizacaoProjeto: '',
  informacao1: '',
  informacao2: '',
  informacao3: '',
  informacao4: '',
  informacao5: ''
}

let musicaParaTodosObj = Object.create(pessoa)
musicaParaTodosObj.nomeProjeto = 'Música Para Todos'
musicaParaTodosObj.objProjeto = 'É um movimento de Arte-Educação através da música. Fundado em maio de 1999, <br> atende prioritariamente crianças e adolescentes que estejam cursando o ensino básico, além de jovens, adultos e idosos do município de Teresina e cidades vizinhas.'
musicaParaTodosObj.localizacaoProjeto = 'Av. Pedro Almeida, 145 - São Cristóvão, Teresina - PI, 64052-280'
musicaParaTodosObj.informacao1 = `<div><a class="cadastro redes-contato" href="https://instagram.com/musicaparatodospi?igshid=MzRlODBiNWFlZA==" target="_blank>"<img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>`
musicaParaTodosObj.informacao2 = `<br><div><a class="cadastro redes-contato" href="https://mobile.facebook.com/musicaparatodospi?_rdc=1&_rdr&refsrc=deprecated" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" srcset="">Facebook</a></div>`

let palacioDaMusicaObj = Object.create(pessoa)
palacioDaMusicaObj.nomeProjeto = 'Palácio da Música'
palacioDaMusicaObj.objProjeto = 'O Palácio da Música é um espaço mantido pela Prefeitura de Teresina, através da Fundação Municipal de Cultura Monsenhor Chaves.'
palacioDaMusicaObj.localizacaoProjeto = 'R. Santa Luzia, 1241 - Centro (Sul), Teresina - PI, 64001-400'
palacioDaMusicaObj.informacao1 = '<div><a class="cadastro redes-contato" href="https://www.instagram.com/palaciodamusica/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>'

let escolaMusicaDonaGalObj = Object.create(pessoa)
escolaMusicaDonaGalObj.nomeProjeto = 'ESCOLA DE MÚSICA DONA GAL'
escolaMusicaDonaGalObj.objProjeto = 'Escola Musical'
escolaMusicaDonaGalObj.localizacaoProjeto = 'Escola de música Dona Gal - R. Rui Barbosa, 3101 - São Joaquim, Teresina - PI, 64002-180'
escolaMusicaDonaGalObj.informacao1 = '<div><a class="cadastro redes-contato" href="https://instagram.com/donagalescolademusica"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>'

let orgPontoDeEquilibrioObj = Object.create(pessoa)
orgPontoDeEquilibrioObj.nomeProjeto = 'Org Ponto de Equilíbrio'
orgPontoDeEquilibrioObj.objProjeto = 'O Grupo Equilíbrio é uma plataforma onde os artistas podem estudar, pesquisar, praticar e principalmente produzir sua arte, tornando-se referência da área no Estado do Piauí.'
orgPontoDeEquilibrioObj.localizacaoProjeto = 'Av. José dos Santos e Silva, 1085 - Centro (Sul), Teresina - PI, 64001-300'
orgPontoDeEquilibrioObj.informacao1 = '<div><a class="cadastro redes-contato" href="https://www.instagram.com/org_pontodeequilibrio/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>'
orgPontoDeEquilibrioObj.informacao2 = '<br><div><a class="cadastro redes-contato" href="https://www.opeq.com.br/?fbclid=PAAaZs6s3lmsEVr0usRd1UHtVCQ8eCGNfQoqVKyoOgu8AXsaq89CTj7Jeo5Oc">Site</a></div>'

let aJMTObj = Object.create(pessoa)
aJMTObj.nomeProjeto = 'Associação de juventude AJMT'
aJMTObj.objProjeto = ''
aJMTObj.localizacaoProjeto = 'Av. Mal. Rondon - Parque Piaui, Teresina - PI'
aJMTObj.informacao1 = '<div><a class="cadastro redes-contato" href="https://instagram.com/associadejuventude"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" srcset="">Instagram</a></div>'
aJMTObj.informacao2 = '<div><a class="cadastro redes-contato" href=""><img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" srcset=""> Gmail: ajmt2021associacao@gmail.com</a></div>'
aJMTObj.informacao3 = '<div><a class="cadastro redes-contato" href="https://l.wl.co/l?u=https%3A%2F%2Fforms.gle%2FqS1WgG68sK4cBZCF6"><img src="https://cdn-icons-png.flaticon.com/512/2875/2875409.png">Formulário de inscrição </a></div>'


//Função para aparecer informações da ong no Pc
function informacoes(pessoa){
  interacaoPc.innerHTML = `
  <div class="interacao-config">
    <label for="floatingInput">NOME:</label>${pessoa.nomeProjeto}
  <br>
  <label for="floatingInput">O QUE ELES FAZEM:</label> ${pessoa.objProjeto}
  <label for="floatingInput">LOCALIZAÇÃO:</label> ${pessoa.localizacaoProjeto}
  <br>
  <br>
  <div class="text-center" >
    <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
    <br>
    <div>
      ${pessoa.informacao1}
      ${pessoa.informacao2}
      ${pessoa.informacao3}
      ${pessoa.informacao4}
      ${pessoa.informacao5}
      </div>
  </div>
</div>
  `
}

//Função para aparecer informações da ong em smartfone
function informacoesCell(pessoa){
  interacao.innerHTML = `
  <div class="interacao-config">
    <label for="floatingInput">NOME:</label>${pessoa.nomeProjeto}
  <br>
  <label for="floatingInput">O QUE ELES FAZEM:</label> ${pessoa.objProjeto}
  <label for="floatingInput">LOCALIZAÇÃO:</label> ${pessoa.localizacaoProjeto}
  <br>
  <br>
  <div class="text-center" >
    <label for="floatingInput" style="color: white; margin-bottom: 10px" >ENTRE EM CONTATO:</label>
    <br>
    <div>
      ${pessoa.informacao1}
      ${pessoa.informacao2}
      ${pessoa.informacao3}
      ${pessoa.informacao4}
      ${pessoa.informacao5}
      </div>
  </div>
</div>
  `
}

if (WURFL.form_factor === 'Desktop') {

    function sucess(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clhm3jnhq00qs01qsawcjcd7m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',
            iconSize: [40, 55]
        });

        let pessoaIcon = L.icon({
            iconUrl: 'img/icon-alfinete.png',
            iconSize: [45, 55]

        });

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let musicaParaTodos = L.marker([-5.080293661150606, -42.77629429380992], { icon: violaoIcon }).addTo(map)
        .bindPopup('MÚSICA PARA TODOS');

        let palacioDaMusica = L.marker([-5.097176221125296, -42.81075604962941], { icon: violaoIcon }).addTo(map)
        .bindPopup('PALÁCIO DA MÚSICA');

        let escolaMusicaDonaGal = L.marker([-5.066833962379359, -42.82844716931162], { icon: violaoIcon }).addTo(map)
        .bindPopup('ESCOLA de música DONA GAL');

        let orgPontoDeEquilibrio = L.marker([-5.095850538207881, -42.81286937116396]).addTo(map)
        .bindPopup('Org Ponto De Equilibrio');

        let aJMT = L.marker([-5.141800,-42.788900]).addTo(map)
        .bindPopup('Associação de juventude AJMT');

        musicaParaTodos.on('click', function(){
          informacoes(musicaParaTodosObj);
        })

        palacioDaMusica.on('click', function(){
          informacoes(palacioDaMusicaObj);
        })

        escolaMusicaDonaGal.on('click', function(){
          informacoes(escolaMusicaDonaGalObj);
        })

        orgPontoDeEquilibrio.on('click', function(){
          informacoes(orgPontoDeEquilibrioObj);
        })

        aJMT.on('click', function(){
          informacoes(aJMTObj);  
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
        
        L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clhm3jnhq00qs01qsawcjcd7m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
        //L.tileLayer('https://api.mapbox.com/styles/v1/jpdsafg/clgdwcvcq00pz01ppsrbhc75j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianBkc2FmZyIsImEiOiJjbGdjeWhhYjEwMzlqM2VybmlhemJiczB4In0.XmLwqlWabpGKax8ZrFqhqA', {
        }).addTo(map);
        let violaoIcon = L.icon({
            iconUrl: 'img/violao-icon-sem-fundo.png',
            iconSize: [40, 55]
        });

        let pessoaIcon = L.icon({
          iconUrl: 'img/icon-alfinete.png',
          iconSize: [45, 55] 
        });   

        let localizacaoPessoa = L.marker([pos.coords.latitude, pos.coords.longitude], { icon: pessoaIcon }).addTo(map)
            .bindPopup('Sua localização')
            .openPopup();

        let musicaParaTodos = L.marker([-5.080293661150606, -42.77629429380992], { icon: violaoIcon }).addTo(map)
        .bindPopup('MÚSICA PARA TODOS');

        let palacioDaMusica = L.marker([-5.097176221125296, -42.81075604962941], { icon: violaoIcon }).addTo(map)
        .bindPopup('PALÁCIO DA MÚSICA');

        let escolaMusicaDonaGal = L.marker([-5.066833962379359, -42.82844716931162], { icon: violaoIcon }).addTo(map)
        .bindPopup('ESCOLA de música DONA GAL');

        let orgPontoDeEquilibrio = L.marker([-5.095850538207881, -42.81286937116396]).addTo(map)
        .bindPopup('Org Ponto De Equilibrio');

        let aJMT = L.marker([-5.141800,-42.788900]).addTo(map)
        .bindPopup('Org Ponto De Equilibrio');

        musicaParaTodos.on('click', function(){
          informacoesCell(musicaParaTodosObj);
        })

        palacioDaMusica.on('click', function(){
          informacoesCell(palacioDaMusicaObj);
        })

        escolaMusicaDonaGal.on('click', function(){
          informacoesCell(escolaMusicaDonaGalObj);
        })

        orgPontoDeEquilibrio.on('click', function(){
          informacoesCell(orgPontoDeEquilibrioObj);
        })

        aJMT.on('click', function(){
          informacoesCell(aJMTObj);  
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