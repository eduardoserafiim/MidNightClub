const fotosales = document.getElementById('imagem');
const fotoheitor = document.getElementById('imagem2');
const fotoserafim = document.getElementById('imagem3');
const fotoqueiroz = document.getElementById('imagem4');
const fotofernandes = document.getElementById('imagem5');
const imagens = document.querySelectorAll('.imagens');
const aqui = document.getElementById('aqui');

// Objeto para armazenar informações dos membros
const membros = {
    sales: {
        name: "João Sales",
        description: "João 'GOAT' Sales, jogava profissionalmente LOL, mas felizmente, desistiu da carreira e veio estudar no SENAC no curso de Analise e Desenvolvimento de Sistemas para ser alguem na vida, obrigado. Fez a parte dos cards de ver a inscrição, foi por ai.",
        githubLink: "https://github.com/thenewgrau",
        linkedinLink: "https://www.linkedin.com/in/eduardo-serafim-821649305/"
    },
    heitor: {
        name: "João Heitor",
        description: "Um louco e sonhador trabalhador, sinceramente, tenho orgulho desse rapaz, fez a parte de inscrição maravilhosamente, não podia pedir mais desse sujeito de boa vontade. Deve ter 17 anos, não sei, gosta de Drake e tem 1,72 de altura, tamanho do pé = 41, 42 (sinsitro).",
        githubLink: "https://github.com/thenewgrau",
        linkedinLink: "https://www.linkedin.com/in/eduardo-serafim-821649305/"
    },
    serafim: {
        name: "Eduardo Serafim",
        description: "Conhecido como Eduardo 'Walter White' Serafim, trabalhou honestamente na parte de about us (para os não gringos sobre nós), e também para a conclusão desse trabalho exaustivo, merece o pagamento do seu 13° e também pensa que quem leu isso até o final é gay.",
        githubLink: "https://github.com/eduardoserafiim",
        linkedinLink: "https://www.linkedin.com/in/eduardo-serafim-821649305/"
    },
    queiroz: {
        name: "Henrico Queiroz",
        description: "Altamente procurado na sociedade urugaiana para renovação da sua matricula. Forte personalidade e braços carnudos, está sendo procurado no Chile por hackear pessoas. Um ótimo programador pois fez a parte quase inteira do main, num sei, esqueci o nome, acho que é main, alguma coisa assim sla. Este homen é a favor da escala 7x0 e do imposto ICMS",
        githubLink: "https://github.com/HenricQ",
        linkedinLink: "https://www.linkedin.com/in/henrico-queiroz-725007325/"
    },
    fernandes: {
        name: "Robert Fernandes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore reiciendis iste corrupti quas autem nostrum! Tenetur obcaecati voluptas fugiat distinctio recusandae necessitatibus aliquam temporibus voluptatem pariatur? Illum, mollitia soluta. Beatae voluptatum libero doloremque repudiandae. Vitae eos sequi eligendi obcaecati non deleniti error aut, maxime facilis nemo adipisci modi explicabo at cum ipsa consequatur! Accusamus consequatur necessitatibus ipsa eveniet minus.",
        githubLink: "https://github.com/thenewgrau",
        linkedinLink: "https://www.linkedin.com/in/eduardo-serafim-821649305/"
    }
};

function removerRotate() {
    imagens.forEach(img => {
        img.style = 'animation: none'
    });
}

// Função para mostrar informações do membro
function showInfo(name, description, githubLink, linkedinLink) {
    removerRotate();
    aqui.innerHTML = `
    <div id='numseimaiorqueooceano'>
    <h1>${name}</h1>
            <p>${description}</p>
            <div id='oceano'>
                <div id='agua'>
                    <img id='github' src='about/Fotos/github.png' alt='github'>
                    <a href='${githubLink}' target='_blank'>GitHub</a>
                </div>
                <div id='agua'>
                    <img id='linkedin' src='about/Fotos/linkedin.png' alt='linkedin'>
                    <a href='${linkedinLink}' target='_blank'>Linkedin</a>
                </div>
            </div>
        </div>
    `;
}


// Função para obter informações do membro com base no ID
function showMemberInfo(memberId, imageElement) {
    const member = membros[memberId];
    if (member) {
        showInfo(member.name, member.description, member.githubLink, member.linkedinLink);
        imageElement.style = 'animation: rotate 3s infinite ease-in-out;';
    }

}

// Adiciona os eventos de clique para cada membro
fotosales.addEventListener('click', () => showMemberInfo('sales', fotosales));
fotoheitor.addEventListener('click', () => showMemberInfo('heitor', fotoheitor));
fotoserafim.addEventListener('click', () => showMemberInfo('serafim', fotoserafim));
fotoqueiroz.addEventListener('click', () => showMemberInfo('queiroz', fotoqueiroz));
fotofernandes.addEventListener('click', () => showMemberInfo('fernandes', fotofernandes));

