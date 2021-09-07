const loadLivros = () => {
    const livros = getLocalStorate('livros') ? getLocalStorate('livros') : []
    const sectionLivros = document.querySelector('.container')
    if (livros.length == 0) {
        document.querySelector('.container').innerHTML = '<h1>Sem Livros Cadastrados no Momento!</h1>'
        return
    }
    for (let i = 0; i < livros.length ; i++) {
        console.log(livros[i])
        sectionLivros.append(addLivroToIndex(livros[i]))
    }
}
const addLivroToIndex = (livro) => {
    let divLivro = document.createElement('div')
    let divImage = document.createElement('div')
    let divDesc = document.createElement('div')
    let elImg = document.createElement('img')
    let elTitulo = document.createElement('h3')
    let elP = document.createElement('p')

    elTitulo.innerHTML = livro.titulo
    elP.innerHTML = `Este Livro foi Escrito por ${livro.autor} e publicado no ano de ${livro.anoPublicacao}, possui ${livro.paginas} paginas.`
    divLivro.classList.add('livro')
    divImage.classList.add('image')
    divDesc.classList.add('desc')
    divDesc.appendChild(elTitulo)
    divDesc.appendChild(elP)
    elImg.setAttribute('src', livro.urlImagem)
    divImage.appendChild(elImg)
    divLivro.appendChild(divImage)
    divLivro.appendChild(divDesc)
    return divLivro
}
/**
 * Adicionar livro ao localStorage
 * @param {*} name 
 * @returns 
 */
const addLivro = (livro) => {
    const livros = getLocalStorate('livros') ? getLocalStorate('livros') : []
    livros.push(livro)
    setLocalStorate('livros', livros)
}
/**
 * Pega itens armazenados no localStorage
 * @param {NOME DA CHAVE USADA PARA SALVAR } name 
 * @returns valores recuperados do localStorage
 */
const getLocalStorate = (name) => {
    return JSON.parse(localStorage.getItem(name))
}
/**
 * Salvar itens no localStorage
 * @param {NOME DA CHAVE QUE SERA ARMAZENADA} name 
 * @param {VALORES QUE SERÃO ARMAZENADOS} value 
 */
const setLocalStorate = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}