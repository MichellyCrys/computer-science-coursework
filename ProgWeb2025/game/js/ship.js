import { TAMX } from "./config.js"
import { space } from "./space.js"

const directions = [
  "assets/png/playerLeft.png",
  "assets/png/player.png",
  "assets/png/playerRight.png",
]

class Ship {
  constructor() {
    this.element = document.createElement("img")
    this.element.id = "ship"
    this.direction = 1
    this.element.src = directions[this.direction]
    this.element.style.bottom = "20px"
    this.element.style.left = `${TAMX / 2 - 50}px`
    space.element.appendChild(this.element)

    this.lives = 3
    this.damaged = false
    this.updateLivesDisplay()
  }

  changeDirection(giro) {
    if (this.direction + giro >= 0 && this.direction + giro <= 2)
      this.direction += giro
    this.element.src = directions[this.direction]
  }

  move() {
    const currentLeft = parseInt(this.element.style.left)
    if (this.direction === 0 && currentLeft > 0) {
      this.element.style.left = `${currentLeft - 5}px`
    }
    if (this.direction === 2 && currentLeft < TAMX - 100) {
      this.element.style.left = `${currentLeft + 5}px`
    }
  }

  getX() {
    return parseInt(this.element.style.left)
  }

  getY() {
    return parseInt(this.element.style.bottom)
  }

  takeDamage() {
    if (this.damaged) return
    this.lives--
    this.damaged = true
    this.element.src = "assets/png/playerDamaged.png"
    this.updateLivesDisplay()

    if (this.lives <= 0) {
      document.getElementById("game-over").style.display = "flex"
      return
    }

    setTimeout(() => {
      this.damaged = false
      this.element.src = directions[this.direction]
    }, 5000)
  }

  updateLivesDisplay() {
    const livesDiv = document.getElementById("lives")
    livesDiv.innerHTML = ""
    for (let i = 0; i < this.lives; i++) {
      const heart = document.createElement("img")
      heart.src = "assets/png/life.png"
      livesDiv.appendChild(heart)
    }
  }
}

export const ship = new Ship()
