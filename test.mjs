import { strictEqual } from 'node:assert'
import { test } from 'node:test'

test('test integer addition', async t => {
  strictEqual(1 + 1, 2, '1 + 1 should equal to 2')
})

test('test string addition', async t => {
  strictEqual('1' + '1', 2, 'Concatenation of "1" and "1" does not equal to 2')
})
