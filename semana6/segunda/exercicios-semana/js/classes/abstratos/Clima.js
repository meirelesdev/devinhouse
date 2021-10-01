export default class Clima {
    #temperatura
    #temSol
    constructor(temperatura, temSol){
        this.#temperatura = temperatura
        this.#temSol = temSol
    }
    toString(){
        return `Clima - A temperatura esta em: ${this.#temperatura} e o Sol esta ${this.#temSol ? 'Lindo': 'Escondigo'}.`
    }
}