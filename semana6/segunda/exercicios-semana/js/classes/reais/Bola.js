export default class Bola {
    #cor
    #tipo
    constructor(cor, tipo) {
        this.#cor = cor
        this.#tipo = tipo
    }
    toString(){
        return `Bola cor: ${this.#cor} do tipo: ${this.#tipo}`
    }
}