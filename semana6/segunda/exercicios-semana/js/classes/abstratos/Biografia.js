export default class Biografia {
    #dono
    #descricao
    constructor(dono, descricao){
        this.#dono = dono
        this.#descricao = descricao
    }
    toString(){
        return `Biografia - Autor: ${this.#dono} <br>Descrição: ${this.#descricao}`
    }
}