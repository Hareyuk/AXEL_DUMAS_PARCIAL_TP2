
class ModelMem {
    #numeros

    constructor() {
        this.#numeros = [
            { numero: 10 },
            { numero: 15 },
            { numero: 20 },
        ]
    }

    obtenerNumeros = async () => this.#numeros
    
    guardarNumero = async numero => {
        this.#numeros.push(numero)
        return numero
    }
}

export default ModelMem