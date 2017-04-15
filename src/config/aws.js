const AWS = require('aws-sdk')

AWS.config.update({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
  region: 'us-east-1',
  // todo: make dev/prod turnary
  endpoint: 'http://localhost:8000',
})

module.exports = AWS
