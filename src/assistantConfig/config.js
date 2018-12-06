const AssistantV1 = require('watson-developer-cloud/assistant/v1')

const ASSISTANT = new AssistantV1({
  version: '2018-02-16',
  iam_apikey: 'yOUzqSt5c_qVf7_MWJN6wiitl2PgkjaOhb-lunEO3Hp9',
  url: 'https://gateway.watsonplatform.net/assistant/api'
})
module.exports = ASSISTANT
