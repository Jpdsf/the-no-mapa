
let infDesk = document.getElementById('info')

if(WURFL.form_factor === 'Desktop'){
    console.log('pc')
    infDesk.innerHTML = `
    <div class="informacoes-pc" id="informacoes-pc">
    <div class="informacoes-config text-center">
    <h1> THE NO MAPA </h1>
    <div class="sobre">
        <div class="texto-sobre">
            É um projeto que tem o objetivo de conhecer e divulgar iniciativas sociais que contribuem para o desenvolvimento de toda a população local, para que assim a comunidade tenha a oportunidade de se inserir nessas iniciativas de acordo com seus interesses
        </div>
        <div class="img-sobre">
            <img src="img/logo_projeto_transparente.png" alt="" srcset="">
            
        </div>
    </div>
</div>
</div>
`
} else {
    console.log('nao-pc')
    infDesk.innerHTML = `
    <div class="informacoes" id="informacoes">
    <div class="informacoes-config text-center" style="width: 95%">
    <h1> THE NO MAPA </h1>
    <div class="">
        <div class="texto-sobre-cell">
            É um projeto que tem o objetivo de conhecer e divulgar iniciativas sociais que contribuem para o desenvolvimento de toda a população local, para que assim a comunidade tenha a oportunidade de se inserir nessas iniciativas de acordo com seus interesses
        </div>
        <div class="img-sobre">
            <img src="img/logo_projeto_transparente.png" alt="" srcset="">
            
        </div>
    </div>
</div>
</div>`



}