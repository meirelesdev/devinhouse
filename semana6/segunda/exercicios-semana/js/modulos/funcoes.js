
function registraElemento(elemento, conteudo) {
    elemento.innerHTML = conteudo
}

function montaConteudo(objeto) {
    return `
      <div>
        <p>Nome: ${objeto.nome}</p>
        <p>Idade: ${objeto.idade}</p>
        <p>Linguagem preferida: ${objeto.linguagemPreferida}</p>
        <p>Objetivo de carreira: ${objeto.objetivo}</p>
      </div>
    
    `
}
export { registraElemento, montaConteudo}