const { equals, add, subtract } = require('../utilities/mathUtils')

test('equals', () => {
  expect(equals(1, 1)).toBe(true)
  expect(equals(1, 2)).toBe(false)
})

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1)
})
