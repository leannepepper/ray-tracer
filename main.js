import { Vector } from './utilities/Vector'

class Interface {
  constructor () {
    this._init()
  }

  _init () {
    this._initEvents()
  }

  _initEvents () {
    // Add two vectors together
    const vectorA = new Vector(1, 2, 3)
    const vectorB = new Vector(4, 5, 6)

    console.log(vectorA.add(vectorB))
  }
}

let APP_ = null

window.addEventListener('DOMContentLoaded', async () => {
  APP_ = new Interface()
  await APP_.init()
})
