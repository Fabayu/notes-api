

// - Importamos fichero que hace la conexion a mongo.js
require('./mongo')

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express()
const cors = require('cors')
dotenv.config()
// const Note = require('./models/Note')

// Importamos middleware
// const jwt = require('jsonwebtoken')
const notFound = require('./middleware/notFound')
const handleError = require('./middleware/handleError')


const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
// const User = require('./models/User')
const loginRouter = require('./controllers/login')

// Con esto cualquier origen funciona en nuestra api
app.use(cors())
// Soporta la request que se hacen cuando se pasa un objeto y lo va a parsear.
app.use(express.json())

// Middleware: intercepta la peticion que pasa por tu api
// para publicar archivos estáticos etc.
/* app.use((request, response, next) => {}) */

// El orden de los Middleware y los path es importante.
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(handleError)
app.use(notFound)

// Este servidor tiene que escuchar de algún puerto:
const PORT = process.env.PORT// || 3001



mongoose.connect("mongodb+srv://ayushjai1267:crack%40quotes28@cluster0.kgsidox.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT,()=>{
      console.log(`Server running in port ${PORT}`)

  
        })
        
})
.catch((error)=>{
    console.log("Err......");
})







module.exports = {app, server}

