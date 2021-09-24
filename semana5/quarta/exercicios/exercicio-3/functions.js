const osMelhoresClientes = obj => {
    return obj.nome
}
const osMelhoresInvestidoresFunction = (array) => {
    array = array.sort((a, b) => {
        const clienteA = a.saldo;
        const clienteB = b.saldo;

        let comparador = 0;
        if (clienteA > clienteB) {
            comparador = 1;
        } else if (clienteA < clienteB) {
            comparador = -1;
        }
        return comparador * -1
    })
    const [primeiro, segundo, terceiro, quarto, quinto] = array
    return [primeiro.nome, segundo.nome, terceiro.nome, quarto.nome, quinto.nome]
}