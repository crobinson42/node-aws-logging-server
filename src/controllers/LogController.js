const aws = require('../config/aws')
const { tableName } = require('../config/dynamoDb')

const dynamojo = require('dynamojo')
const uuid = require('node-uuid')

dynamojo.config(aws)

module.exports = {
  put (req, res) {
		const insertData = Object.assign({ id: uuid.v4() }, req.body)

		dynamojo.insert(tableName, insertData, (err, data) => {
			if (err) {
				return res.status(500).send(`Unable to add item. Error JSON: ${JSON.stringify(err, null, 2)}`)
			}

			return res.status(201).send(data)
		})
  },

	get (req, res) {
  	// list all items
  	// dynamojo.list(tableName, (err, data) => {
		// 	return res.send(err || data)
		// })

		// todo: WTF doesn't this work?
		dynamojo.getByKey(tableName, 'id', 'occuredAt', '2017-10-12', (err, data) => {
			if (err) return res.status(500).json(err)

			res.json(data)
		})
	},
}
