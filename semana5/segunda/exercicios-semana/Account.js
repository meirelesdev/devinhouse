class Account {
    constructor(number, balance, client) {
        this.setNumber(number)
        this.setBalance(balance)
        this.setClient(client)
    }
    getNumber() {
        return this.number
    }
    getBalance(){
        return this.balance
    }
    getClient() {
        return this.client
    }
    setNumber(number) {
        this.number = number
    }
    setBalance(balance){
        this.balance = balance
    }
    setClient(client) {
        this.client = client
    }
}