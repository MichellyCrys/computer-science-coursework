import { TAMX, TAMY } from "./config.js"

class Space {
  constructor() {
    this.element = document.getElementById("background")
    this.posY = 0
  }

  move() {
    this.posY += 1
    this.element.style.backgroundPositionY = `${this.posY}px`
  }
}

export const space = new Space()
