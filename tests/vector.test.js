const Vector = require('../utilities/Vector')

test('Vector', () => {
  expect(new Vector(1, 2, 3)).toEqual({
    x: 1,
    y: 2,
    z: 3,
    w: 0
  })
})
