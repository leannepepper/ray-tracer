function equals (a, b) {
  return Math.abs(a - b) < 0.000001
}

function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

module.exports = {
  equals,
  add,
  subtract
}
