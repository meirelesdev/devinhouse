export default class Veiculo {
    #modelo
    #cor
    constructor(modelo, cor, ) {
        this.#modelo = modelo
        this.#cor = cor
    }
    toString(){
        return `Veiculo Modelo: ${this.#modelo}, Cor: ${this.#cor}`
    }
}