import ModelFactory from '../model/DAO/numerosFactory.js'

class Servicio {
    #model

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia)
    }

    obtenerNumeros = async () => {
        try
        {
            const numeros = await this.#model.obtenerNumeros()
            return numeros
        }
        catch (error)
        {
            throw error
        }
    }

    guardarNumero = async numero => {
        try {
            numero.numero = Number(numero.numero); //Así se mantiene como número y no como string
            const numeroGuardado = await this.#model.guardarNumero(numero)
            return numeroGuardado
        } catch (error) {
            throw error
        }
    }

}

export default Servicio