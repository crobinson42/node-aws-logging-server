const config = require('./config/server')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const LogController = require('./controllers/LogController')
const LogCreateTable = require('./util/LogCreateTable')

app.use(bodyParser.json())

app.put('/', LogController.put)
app.get('/', LogController.get)

Promise.all([
		LogCreateTable,
	])
	.then(() => {
		app.listen(config.port, () => {
			console.log(`Logging server listening on port ${config.port}`)
		})
	})
	.catch(err => {
		console.log(`ERROR: failed to start Logging node.js server`, err)
	})
