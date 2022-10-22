class Interface {
  constructor () {
    this._init()
  }

  _init () {
    this._initEvents()
  }

  _initEvents () {
    //...
  }
}

let APP_ = null

window.addEventListener('DOMContentLoaded', async () => {
  APP_ = new Interface()
  await APP_.initialize()
})
