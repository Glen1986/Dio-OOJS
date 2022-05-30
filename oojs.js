class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this._saldo = valor
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return 'operacion negada'
        }
        this._saldo = this._saldo - valor
        return this._saldo
    }
    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, tarjetaCredito) {
        super(agencia, numero)
        this.tipo = 'ContaCorrente'
        this._tarjetaCredito = tarjetaCredito
    }
    get tarjetaCredito() {
        return this._tarjetaCredito
    }
    set tarjetaCredito(valor) {
        return (this._tarjetaCredito = valor)
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, tipo)
        this.tipo = 'ContaPoupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, tipo)
        this.tipo = 'ContaUniversitaria'
    }
    sacar(valor) {
        if (valor > 500) {
            return 'operacion negada'
        }
        return (this._saldo = this._saldo - valor)
    }
}
