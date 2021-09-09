const getValuesAndReturnAnBook = (array = []) => {
    let objeto = {}
    for(let campo = 0 ; campo < array.length ; campo++){
        let nome = ''
        if(!array[campo].getAttribute('name')) continue
        nome = array[campo].getAttribute('name')
        objeto[nome] = array[campo].value
    }
    return objeto
}
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
/**
 * 
 * @param {Recebe um Objeto Livro} livro 
 * @returns Retorna a div ja montada para inserir no index
 */
const addLivroToIndex = (livro) => {
    let divLivro = document.createElement('div')
    let divImage = document.createElement('div')
    let divDesc = document.createElement('div')
    let elImg = document.createElement('img')
    let elTitulo = document.createElement('h3')
    let elP = document.createElement('p')
    let elBtn = document.createElement('button')
    elBtn.innerHTML = 'Excluir'
    elBtn.setAttribute('onclick', 'excluirLivro('+livro.isbn+')')
    elTitulo.innerHTML = livro.titulo
    elP.innerHTML = `Este Livro foi Escrito por ${livro.autor} e publicado no ano de ${livro.anoPublicacao}, possui ${livro.paginas} paginas.`
    divLivro.classList.add('livro')
    divImage.classList.add('image')
    divDesc.classList.add('desc')
    divDesc.appendChild(elTitulo)
    divDesc.appendChild(elP)
    divDesc.appendChild(elBtn)
    elImg.setAttribute('src', livro.urlImagem)
    divImage.appendChild(elImg)
    divLivro.appendChild(divImage)
    divLivro.appendChild(divDesc)
    return divLivro
}
const excluirLivro = (code) => {
    console.log(code)
}
const showMessage = (color, message) => {
    let divMsg = document.querySelector('.msg')
    divMsg.style.display = 'flex'
    divMsg.classList.add(color)
    divMsg.innerHTML = `<p>${message}</p>`
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
    showMessage('green', 'Livro salvo com sucesso.')
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