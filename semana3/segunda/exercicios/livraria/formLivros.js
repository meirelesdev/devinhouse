let form = document.querySelector('#cadastrarProduto')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let fields = form.elements
    let livro = getValuesAndReturnAnBook(fields)
        
    for (const campo in livro) {
        if(!livro[campo]) {
            showMessage('red', 'Faltam Campos a serem preenchidos.')
            return
        }
    }
    addLivro(livro)
    form.reset()
})

