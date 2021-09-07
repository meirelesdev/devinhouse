let form = document.querySelector('#cadastrarProduto')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let fields = form.elements
    let livro = {}
    for(let campo = 0 ; campo < fields.length ; campo++){
        let nome = ''
        if(!fields[campo].getAttribute('name')) continue
        nome = fields[campo].getAttribute('name')
        livro[nome] = fields[campo].value
    }    
    for (const campo in livro) {
        if(!livro[campo]) {
            document.querySelector('.msg').innerHTML = 'Faltam Campos a preencher.'
            return
        }
    }
    addLivro(livro)
})

