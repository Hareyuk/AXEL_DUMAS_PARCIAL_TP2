import dotenv from  'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM' //Al subir en Github, como normalmente no se sube el .env con esto me aseguro que sea por memoria como default.

export default {
    PORT,
    MODO_PERSISTENCIA
}