import { AmqpConnectionManager } from 'amqp-connection-manager'

import { init, send, subscribe } from '../src/frameworks/eventBroker'
import { env } from '../src/config/env'
import { parseAndPersistNexxiotMessage } from '../src/usecases/devices'

let ebConn: AmqpConnectionManager

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

beforeAll(async () => {
  ebConn = await init(env.BROKER_URL)
  await subscribe(env.NEXXIOT_BROKER_TOPIC, '', env.NEXXIOT_QUEUE_NAME, async msg => {
    console.log('receveid message', msg?.content.toString())
  })
  await sleep(1000)
})

afterAll(async () => {
  ebConn.close()
})

// eslint-disable-next-line jest/expect-expect
test('Send data', async () => {
  while (true) {
    await send(env.NEXXIOT_BROKER_TOPIC, 'hello', { hello: 1 })
    await sleep(1000)
  }
}, 100000)
