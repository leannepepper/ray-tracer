const point = require('../utilities/point')

test('point', () => {
  expect(point(1, 2, 3)).toEqual({
    x: 1,
    y: 2,
    z: 3,
    w: 1
  })
})
