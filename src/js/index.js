const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {

    /*Validação de personagem já selecionado */

    const idSelecionado = personagem.attributes.id.value

    if (idSelecionado === 'ultron') return

    /* Selecionando personagem */ 

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagem.classList.add('selecionado')


    /* Trocando imagem e nome do personagem */

    const imagemJogador1 = document.getElementById('personagem-jogador-1')
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

    
    const nomeSelecionado = personagem.getAttribute('data-name')
    const nomeJogador1 = document.getElementById('nome-jogador-1')
    
    nomeJogador1.innerHTML = nomeSelecionado
  })
})


