import express from 'express'
import dotenv from 'dotenv'

import recetasRouter from './routes/recetas.routes.js'
import ingredientesRouter from './routes/ingredientes.routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/recetas', recetasRouter)
app.use('/ingredientes', ingredientesRouter)

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

/*para levantar nuestro FRONT-END*/
app.use(express.static('public'))

/*rutas de END-POINT*/
app.use('/recetas', recetasRouter)
app.use('/ingredientes', ingredientesRouter)