import Servicio from '../servicio/numeros.js'

class Controlador {
    #servicio

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia)
    }

    obtenerNumeros = async (req,res) => {
        try {
            const numeros = await this.#servicio.obtenerNumeros()
            res.json(numeros)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const numeros = await this.#servicio.obtenerNumeros()
            const sumaNumsTotal = numeros.reduce((acc, item)=> acc + item.numero, 0);
            const promedio = { promedio: sumaNumsTotal / numeros.length };
            res.json(promedio)

        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            const numeros = await this.#servicio.obtenerNumeros()
            const numMax = numeros.reduce((max, item)=> item.numero > max.numero ? item : max, numeros[0]);
            const numMin = numeros.reduce((min, item)=> item.numero < min.numero ? item : min, numeros[0]);
            const numsMinMax = {min: numMin.numero, max: numMax.numero};
            res.json(numsMinMax)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerCantidad = async (req,res) => {
        try {
            const numeros = await this.#servicio.obtenerNumeros()
            const cantidad = {cantidad: numeros.length};
            res.json(cantidad)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    guardarNumero = async (req, res) => {
        try {
            
            const numero = req.body
            const numeroGuardado = await this.#servicio.guardarNumero(numero)
            res.json(numeroGuardado)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}

export default Controlador