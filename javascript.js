const fotosales = document.getElementById('imagem');
const fotoheitor = document.getElementById('imagem2');
const fotoserafim = document.getElementById('imagem3');
const fotoqueiroz = document.getElementById('imagem4');
const fotofernandes = document.getElementById('imagem5');
const body = document.getElementById('bodyfoda');



fotosales.addEventListener('click', function(){
    console.log('runing...')
    body.innerHTML += "<div class='card1'><h1>João Sales</h1><p>Mais Conhecido com João 'GOAT' Sales Cola Pinto, foi reconhecido pelo seu enorme trabalho de desenvolvimento e atividade na empresa NightClub.</p><div id='agua'><img id='github' src='github.png' alt='github'><a href='https://github.com/Moe-L3ster' target='_blank'>GitHub</a></div></div>"
});

fotoheitor.addEventListener('click', function(){
    console.log('runing2...')
});

fotoserafim.addEventListener('click', function(){
    console.log('runing3...')
    body.innerHTML += "<div id='numseimaiorqueooceano'><h1>Eduardo Serafim</h1><p>Conhecido como Eduardo 'Walter White' Serafim, trabalhou honestamente e esforçadamente para a conclusão desse trabalho exaustivo, merece o pagamento do seu 13° e também pensa que quem leu isso até o final é gayr. OBS:(Por favor Julia me desculpa)</p><div id='oceano'><div id='agua'><img id='github' src='github.png' alt='github'><a href='https://github.com/thenewgrau' target='_blank'>GitHub</a></div><div id='agua'><img id='linkedin' src='linkedin.png' alt='linkedin'><a href='https://www.linkedin.com/in/eduardo-serafim-821649305/' target='_blank'>Linkedin</a></div></div></div>"
});

fotoqueiroz.addEventListener('click', function(){
    console.log('runing4...')
});

fotofernandes.addEventListener('click', function(){
    console.log('runing5...')
});