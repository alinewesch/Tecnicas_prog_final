const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/db-cadastro')

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

const Usuario = restful.model('Usuario', {
	nome: { type: String, required: true },
	matricula: { type: String, required: true },
	nivel: { type: String, required: true },
	orientador: { type: String, required: true }
})

Usuario.methods(['get', 'post', 'put', 'delete'])
Usuario.updateOptions({new: true, runValidators: true})

Usuario.register(server, '/cadastro')

server.listen(2424)