const AWS = require('../config/aws')
const dynamodb = new AWS.DynamoDB()

const tableParams = {
	TableName: 'Log',
	KeySchema: [
		{ AttributeName: 'id', KeyType: 'HASH' },  // Partition key
	],
	AttributeDefinitions: [
		{ AttributeName: 'id', AttributeType: 'S' },
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 20,
		WriteCapacityUnits: 20,
	},
}

module.exports = new Promise((resolve, reject) => {
	dynamodb.describeTable({ TableName: tableParams.TableName }, err => {
		if (!err) return resolve()

		dynamodb.createTable(tableParams, err => {
			if (err) return reject(err)

			return resolve()
		})
	})
})
