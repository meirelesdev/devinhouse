class Address {
    constructor(street = 'Rua não cadastrado.', number = 'Numero não cadastrado.', city = 'Cidade não cadastrado.', state = 'Estado não cadastrado.', country = 'País não cadastrado.', zipcode = 'Cep não cadastrado') {
        this.setStreet(street)
        this.setNumber(number)
        this.setState(state)
        this.setCity(city)
        this.setCountry(country)
        this.setZipcode(zipcode)
    }
    getStreet() {
        return this.street
    }
    getNumber(){
        return this.number
    }
    getState() {
        return this.state
    }
    getCity() {
        return this.city
    }
    getCountry() {
        return this.country
    }
    getZipcode() {
        return this.zipcode
    }
    setStreet(street) {
        this.street = street
    }
    setNumber(number){
        this.number = number
    }
    setState(state) {
        this.state = state
    }
    setCity(city) {
        this.city = city
    }
    setCountry(country) {
        this.country = country
    }
    setZipcode(zipcode) {
        this.zipcode = zipcode
    }
}