class Cliente {
    #name
    #cpf
    #address
    #foneNumber
    FACTOR_DIGIT_1 = 10
    FACTOR_DIGIT_2 = 11
    MAX_DIGITS_1 = 9
    MAX_DIGITS_2 = 10   

    constructor(name, cpf, foneNumber, address) {
        this.FACTOR_DIGIT_1 = 10
        this.FACTOR_DIGIT_2 = 11
        this.MAX_DIGITS_1 = 9
        this.MAX_DIGITS_2 = 10
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
        if(!this.validaCPF(cpf)) throw new Error("Invalid CPF");
        this.#cpf = cpf
    }
    setAddress(address) {
        this.#address = address
    }
    setFoneNumber(foneNumber) {
        this.#foneNumber = foneNumber
    }        
    validaCPF(cpf = '') {
        cpf = this.extractDigits(cpf);
        if (this.isInvalidLength(cpf)) return false
        if (this.isBlocked(cpf)) return false
        const digit1 = this.calculateDigit(cpf, this.FACTOR_DIGIT_1, this.MAX_DIGITS_1)
        const digit2 = this.calculateDigit(cpf, this.FACTOR_DIGIT_2, this.MAX_DIGITS_2)
        let calculatedCheckDigit = `${digit1}${digit2}`
        return this.getCheckDigit(cpf) == calculatedCheckDigit;
        
    }
    extractDigits(cpf) {
        return cpf.replace(/\D/g, "")
    }
    isInvalidLength(cpf) {
        return cpf.length !== 11
    }
    isBlocked(cpf) {
        const [digit1] = cpf;
        return cpf.split("").every(digit => digit === digit1)
    }
    calculateDigit(cpf, factor, max) {
        let total = 0
        for (const digit of this.toDigitArray(cpf).slice(0, max)) {
            total += digit * factor--
        }
        return (total % 11 < 2) ? 0 : (11 - total % 11)
    }
    toDigitArray(cpf) {
        return [...cpf].map(digit => parseInt(digit))
    }
    getCheckDigit(cpf) {
        return cpf.slice(9)
    }
}