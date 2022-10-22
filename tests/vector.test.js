const vector = require('../utilities/vector')

test('vector', () => {
  expect(vector(1, 2, 3)).toEqual({
    x: 1,
    y: 2,
    z: 3,
    w: 0
  })
})
