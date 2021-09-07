let btnVoltar = document.querySelector('.voltar')
let btnPrint = document.querySelector('.imprimir')
let showRelatorio = document.querySelector('.relatorio')
let form = document.getElementById('formulario')
btnVoltar.addEventListener('click', function(){
    window.location.reload()
})
showRelatorio.addEventListener('click', function () {
    let form = document.querySelector('#formulario')
    let relatorio = document.querySelector('.relatorioTable')
    montarRelatorio()
    form.style.display = 'none'
    relatorio.style.display = 'block'
})
btnPrint.addEventListener('click', printRelatorio)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const produtos = getLocalStorage('produtos') ? getLocalStorage('produtos') : []
    const divErro = document.getElementById('erro')
    let campoVazio = false
    const produto = {
        cod_produto: Number(document.getElementById('cod_produto').value),
        nome_roduto: document.getElementById('nome_produto').value,
        modelo: document.querySelector('[name=mod]:checked').value,
        empresa: document.querySelector('#empresa option:checked').value,
        descricao: document.getElementById('descricao').value,
        qtd: parseInt(document.getElementById('qtd').value),
        data: new Date(document.getElementById('data').value),
        precoCusto: Number(document.getElementById('p_custo').value),
        precoVenda: Number(document.getElementById('p_venda').value),
    }
    for (let campo in produto) {
        campoVazio = checkField(produto[campo])
    }
    if (campoVazio) {
        divErro.innerText = 'Existe campo(s) não preenchido(s).'
        return
    }
    produto.margem = produto.precoVenda - produto.precoCusto
    produtos.push(produto)
    setLocalStorage('produtos', produtos)
    console.log(getLocalStorage('produtos'))
    form.reset()
})
function checkField(field) {
    return (field == '')
}
function getLocalStorage(name = '') {
    return JSON.parse(localStorage.getItem(name))
}
function setLocalStorage(name = '', value = []) {
    return localStorage.setItem(name, JSON.stringify(value))
}
function montarRelatorio() {
    let produtos = getLocalStorage('produtos')
    let tbody = document.querySelector('.relatorioTable tbody')
    if (!produtos) {
        tbody.innerHTML = '<h1>Sem produtos cadastrados.</h1>'
    } else {

        for(let i = 0 ; i < produtos.length; i++) {
            let tr = document.createElement('tr')
            let tdCodigo = document.createElement('td')
            let tdNome = document.createElement('td')
            let tdModelo = document.createElement('td')
            let tdFornecedor = document.createElement('td')
            let tdDescricao = document.createElement('td')
            let tdQuantidade = document.createElement('td')
            let tdPrecoCusto = document.createElement('td')
            let tdPrecoVenda = document.createElement('td')
            let tdPrecoMargem = document.createElement('td')
            let tdDataUltmaEntrega = document.createElement('td')
            tdCodigo.append(produtos[i].cod_produto)
            tr.append(tdCodigo)
            tdNome.innerHTML = produtos[i].nome_roduto
            tr.append(tdNome)
            tdModelo.innerHTML = produtos[i].modelo
            tr.append(tdModelo)
            tdDescricao.innerHTML = produtos[i].descricao
            tr.append(tdDescricao)
            tdFornecedor.innerHTML = produtos[i].empresa
            tr.append(tdFornecedor)
            tdQuantidade.innerHTML = produtos[i].qtd
            tr.append(tdQuantidade)
            tdPrecoCusto.innerHTML = produtos[i].precoCusto
            tr.append(tdPrecoCusto)
            tdPrecoVenda.innerHTML = produtos[i].precoVenda
            tr.append(tdPrecoVenda)
            tdPrecoMargem.innerHTML = produtos[i].margem
            tr.append(tdPrecoMargem)
            tdDataUltmaEntrega.innerHTML = `${new Date(produtos[i].data).toLocaleDateString('pt-br')}`
            tr.append(tdDataUltmaEntrega)
            tbody.append(tr)
        }
    }
}
function printRelatorio() {
    window.print()
}