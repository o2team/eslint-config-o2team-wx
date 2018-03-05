import index from '../'
import test from 'ava'

test('test basic properties of eslint config - index.js', t => {
  t.truthy(isArray(index.extends))
  t.truthy(isObject(index.parserOptions))
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function isArray (arr) {
  return Array.isArray(arr)
}
