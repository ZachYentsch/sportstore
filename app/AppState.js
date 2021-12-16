import { Baseball } from "./Models/Baseball.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  baseball = [
    new Baseball({ type: 'Glove', brand: 'Rawlings', quantity: 1 }),
    new Baseball({ type: 'Bat', brand: 'Louisville Slugger', quantity: 2 }),
    new Baseball({ type: 'Cleats', brand: 'Nike', quantity: 1 }),
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})