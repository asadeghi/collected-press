import { expect, test } from 'vitest'
import { handleRequest } from '../index.js'

test('responds with url', async () => {
  const req = new Request('http://localhost/github-site/RoyalIcing/RoyalIcing')
  const res = await handleRequest(req)
  expect(await res.text()).toBe('URL: http://localhost/ KEY: value')
})
