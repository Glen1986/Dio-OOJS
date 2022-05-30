function validArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('envie los parametros')
        if (typeof arr !== 'object')
            throw new TypeError('array debe ser objeto')
        if (typeof num !== 'number')
            throw new TypeError('numero debe ser number')
        if (arr.length !== num) throw new RangeError('es diferente<>')
        return arr
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('reference error')
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log('type error')
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log('Range error')
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        } else {
            console.log('error no esperado:' + e)
        }
    }
}
console.log(validArray())
