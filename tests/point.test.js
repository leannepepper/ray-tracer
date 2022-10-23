const Point = require('../utilities/Point')

test('Point', () => {
  expect(new Point(1, 2, 3)).toEqual({
    x: 1,
    y: 2,
    z: 3,
    w: 1
  })
})
