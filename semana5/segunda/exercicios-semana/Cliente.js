class Cliente {
    #name
    #cpf
    #address
    #foneNumber

    constructor(name, cpf, foneNumber, address) {
        this.setName(name)
        this.setCpf(cpf)
        this.setAddress(address)
        this.setFoneNumber(foneNumber)
    }
    getName() {
        return this.#name
    }
    getCpf(){
        return this.#cpf
    }
    getAddress() {
        return this.#address
    }
    getFoneNumber() {
        return this.#foneNumber
    }   
    setName(name) {
        this.#name = name
    }
    setCpf(cpf){
        this.#cpf = cpf
    }
    setAddress(address) {
        this.#address = address
    }
    setFoneNumber(foneNumber) {
        this.#foneNumber = foneNumber
    }
}