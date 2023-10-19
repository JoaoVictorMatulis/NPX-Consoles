import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import produtoController from './controllers/produtoController.js'

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

servidor.use(produtoController)




const port = process.env.PORT
servidor.listen(process.env.PORT, () => console.log(`API subiu na porta ${port}`))