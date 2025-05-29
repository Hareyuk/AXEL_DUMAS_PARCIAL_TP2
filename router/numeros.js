import express from 'express'
import Controlador from '../controlador/numeros.js'

class Router {
    #controlador

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia)
    }

    start() {    
        const router = express.Router()
        router.get('/entrada', this.#controlador.obtenerNumeros)
        router.get('/promedio', this.#controlador.obtenerPromedio)
        router.get('/minmax', this.#controlador.obtenerMinMax)
        router.get('/cantidad', this.#controlador.obtenerCantidad)
        router.post('/entrada', this.#controlador.guardarNumero)
        return router
    }
}

export default Router