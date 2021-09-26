class Transaction {
    constructor(account, transactionValue) {
        this.setAccount(account)
        this.setTransactionValue(transactionValue)
    }
    getAccount() {
        return this.account
    }
    getTransactionValue() {
        return this.transactionValue
    }
    setAccount(account) {
        this.account = account
    }
    setTransactionValue(transactionValue) {
        this.transactionValue = transactionValue
    }
    transferAmount(value) {
        let balance = this.getAccount().getBalance()
        if(balance >= value){
            balance -= value
            this.getAccount().setBalance(balance)
            return `Transferencia de ${value} concluida com sucesso.<br>Seu novo saldo é ${this.getAccount().getBalance()}`
        } else {
            throw new Error("Saldo Insuficiente")
        }
    }
    depositAmount(value) {
        let balance = this.getAccount().getBalance()
        balance += value
        this.getAccount().setBalance(balance)
        return `Deposito realizado com sucesso. Seu novo saldo é ${this.getAccount().getBalance(balance)}`
    }
}