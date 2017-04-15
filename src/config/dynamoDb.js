const AWS = require('../config/aws')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = {
	tableName: 'Log',
	docClient,
}
