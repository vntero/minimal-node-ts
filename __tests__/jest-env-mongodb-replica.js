/* eslint-disable @typescript-eslint/no-var-requires */
const NodeEnvironment = require('jest-environment-node')

class CustomEnvironment extends NodeEnvironment {
  constructor (config, context) {
    super(config, context)
    this.testPath = context.testPath
    this.docblockPragmas = context.docblockPragmas
  }

  async setup () {
    await super.setup()

    this.global.mongoURL = process.env.MONGO_URL_TEST
  }

  async teardown () {
    this.global.mongoURL = undefined

    // await sleep(3000) // improves weird connection timeout issues when running multiple tests

    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = CustomEnvironment
