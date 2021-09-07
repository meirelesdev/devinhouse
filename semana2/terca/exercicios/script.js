let form = document.querySelector('#formCodProduto')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let codigo = form.elements["codigo"].value
    let modelo = codigo.substring(0, 3)
    let lote = codigo.substring(3, 5)
    let cor = getCor(codigo.substring(5, 8))
    let voltagem = getVoltagem(codigo.substring(8))    
    let resultado = `<p>
                        Produto: ${codigo}<br><br>
                        Modelo: ${modelo}<br><br>
                        Lote: ${lote}<br><br>
                        Cor: ${cor}<br><br>
                        Voltagem: ${voltagem}<br><br>
                        </p>
                        `
    document.querySelector('.resultado').innerHTML = resultado
})
function getVoltagem(valor)
{
    switch(valor){
        case '1':
            valor = '110v'
            break
        case '2':
            valor = '220V'
            break
        default:
            valor = 'Voltagem Invalida'
            break
    }
    return valor
}
function getCor(valor)
{
    switch(valor){
        case '001':
            valor = 'Vermelho'
            break
        case '002':
            valor = 'Preto'
            break
        case '003':
            valor = 'Amarelo'
            break;
        default:
            valor = 'Cor Invalida'
            break
    }
    return valor
}