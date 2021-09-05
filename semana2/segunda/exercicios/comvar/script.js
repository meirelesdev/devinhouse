
var produtos = []
document.getElementById('formulario').addEventListener('submit',(event)=>{
    event.preventDefault()
    const divErro = document.getElementById('erro')
    let campoVazio = false
    const produto = {
        cod_produto : Number(document.getElementById('cod_produto').value),
        nome_roduto: document.getElementById('nome_produto').value,
        modelo: document.querySelector('[name=mod]:checked').value,
        empresa: document.querySelector('#empresa option:checked').value,
        descricao: document.getElementById('descricao').value,
        qtd: parseInt(document.getElementById('qtd').value),
        data: new Date(document.getElementById('data').value),
        precoCusto: Number(document.getElementById('p_custo').value),
        precoVenda: Number(document.getElementById('p_venda').value),
    }
    for(let campo in produto) {
        campoVazio = checkField(produto[campo])
    }
    if(campoVazio) {
        divErro.innerText = 'Existe campo(s) não preenchido(s).'
        return
    }
    produto.margem = produto.precoVenda - produto.precoCusto
    produtos.push(produto)
    console.log(produtos)
})
function checkField(field) {
    return (field == '')
}