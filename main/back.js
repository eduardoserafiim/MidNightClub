
const pagLog = document.getElementById('loginPg')
const body = document.getElementsByTagName('body')[0]
const ptP = document.getElementById('ptP')
const ptB = document.getElementById('ptB')
const botaologin = document.getElementsByClassName('botaofodao')[0]
const comentar = document.getElementsByClassName('comentario')[0]
const input1fodao = document.getElementById('text1')
const input2fodao = document.getElementById('text2')
const input3fodao = document.getElementById('text3')


document.getElementById('botLogin').addEventListener('click', function(){
    pagLog.style = 'z-index: 1;right:0'
    body.style = 'overflow-y: hidden'
})

ptP.addEventListener('click', function(){
    pagLog.style = 'z-index: -1;right: -105%'
    body.style = 'overflow-y: visible'
})

function relogio() {
    const pxData = document.getElementById('p1D');
    const tRest = document.getElementById('p2');
    const dataAt = new Date();
    const dataEv = new Date('2024-11-30');

    // Definindo a data do evento
    pxData.innerHTML = `${dataEv.getDate()} . ${dataEv.getMonth() + 1} . ${dataEv.getFullYear()}`;

    // Calculando o tempo restante em milissegundos
    const tempRestante = dataEv - dataAt;

    // Calculando dias, horas, minutos e segundos restantes
    const dias = Math.floor(tempRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempRestante % (1000 * 60)) / 1000);

    // Exibindo o tempo restante
    tRest.innerHTML = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;

    setTimeout(relogio, 1000); // Atualiza a cada segundo
}

relogio();

var i = 0
var totImg = 6
function carrosel(){
    const carr = document.getElementById('best')
    carr.innerHTML = `<img class="carroselcarros" src='FotosP/carro${i}.jpg'>`
    i++
    if(i > totImg){
        i = 0
    }
    setTimeout(carrosel,1500)
}

carrosel()

botaologin.addEventListener('click', function(){
    if(input1fodao.value == ''){
        comentar.innerHTML += `
            <p id='falatorionegativo'>
                Precisa colocar um nome né bonitão.
            </p>
            `
    }else if(input2fodao.value == ''){
        comentar.innerHTML += `

            <p id='falatorionegativo'>
                Precisa do CPF lenda.
            </p>
            `
    }else if(input3fodao.value == ''){
        comentar.innerHTML += `
            <p id='falatorionegativo'>
                Meu Deus cara coloca um email.
            </p>
        `
    }
    else{
        comentar.innerHTML += ` <p id="falatorio"> Inscrição realizada com sucesso</p>`
    }
    setTimeout(function () {console.log('oi'); comentar.innerHTML = ''}, 2500);
    
})
