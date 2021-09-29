class Conta {
    constructor(numero, nome, saldo){
        this.numero = numero
        this.nome = nome
        this.saldo = saldo > 0 ? saldo : 0
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
    verificarSaldo(){
        return this.saldo
    }
}
const conta1 = new Conta('2', 'Daniel', 0)

console.log(conta1)
conta1.depositar(50)
console.log(conta1)
conta1.sacar(25)
console.log(conta1)
