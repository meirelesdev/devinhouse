//--Separando os melhores investidores com class
class osMelhoresInvestidoresClass {
    constructor(clientes) {
        this.clientes = clientes;
    }
    organizarEmOrdemDeSaldo() {
        return this.clientes.sort((clienteA, clienteB) => {
            return clienteB.saldo - clienteA.saldo
        })
    }
    pegarOsCincoMelhores() {
        const [primeiro, segundo, terceiro, quarto, quinto] = this.organizarEmOrdemDeSaldo()
        return `<br>${primeiro.nome}, com saldo: ${primeiro.saldo}.
        <br> ${segundo.nome}, com saldo: ${segundo.saldo}.
        <br> ${terceiro.nome}, com saldo: ${terceiro.saldo}.
        <br> ${quarto.nome}, com saldo: ${quarto.saldo}.
        <br> ${quinto.nome}, com saldo: ${quinto.saldo}.`
    }
    getApresentarOsCincoMelhores() {
        return this.pegarOsCincoMelhores()
    }
}