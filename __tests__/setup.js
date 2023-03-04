/* eslint-disable @typescript-eslint/no-var-requires */
const mongomem = require('mongodb-memory-server')

module.exports = async () => {
  // const mongoServer = new mongomem.MongoMemoryReplSet({ // replica set is needed for change stream hooks
  //   replSet: { storageEngine: 'wiredTiger' },
  // })
  // await mongoServer.waitUntilRunning()
  // await mongoServer.getUri('dokodb-test')
  //   .then(async URI => {
  //     console.log('###### GLOBAL SETUP -- MONGO URI:', URI)
  //     process.env.MONGO_URL_TEST = URI
  //     process.env.USE_CMA_API = 'true'
  //   })
  //   .catch(e => {
  //     throw e
  //   })

  // global.mongoServer = mongoServer
}
