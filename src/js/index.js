const personagens = document.querySelectorAll('.personagem');



personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) { window.scrollTo({top: 0, behavior: 'smooth'});

        }
        
        removerSelecaoPersonagem();
        
        personagem.classList.add('selecionado');
        
        alterarImagemDoPersonagem(personagem);

        alterarNomeDoPersonagem(personagem);

        alterarDescricaoPersonagem(personagem);
        
        

    })      
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');

    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagem(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
