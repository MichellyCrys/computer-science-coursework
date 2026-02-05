import { TAMX, PROB_ENEMY_SHIP, ENEMY_TYPES } from "./config.js"
import { space } from "./space.js"

class Enemy {
  constructor() {
    this.type = ENEMY_TYPES[Math.floor(Math.random() * ENEMY_TYPES.length)]
    this.element = document.createElement("img")
    this.element.className = "enemy"
    this.element.src = this.type.src
    this.element.style.top = "-40px"
    this.element.style.left = `${Math.random() * (TAMX - 50)}px`
    this.speed = Math.random() * (this.type.maxSpeed - this.type.minSpeed) + this.type.minSpeed
    space.element.appendChild(this.element)
  }

  move() {
    this.element.style.top = `${parseFloat(this.element.style.top) + this.speed}px`
  }

  getX() {
    return parseInt(this.element.style.left)
  }

  getY() {
    return parseInt(this.element.style.top)
  }

  destroy() {
    this.element.remove()
    return this.type.points
  }

  outOfBounds() {
    return parseInt(this.element.style.top) > 1000
  }
}

const enemies = []

export const createEnemies = () => {
  if (Math.random() < PROB_ENEMY_SHIP) {
    enemies.push(new Enemy())
  }
}

export const moveEnemies = () => {
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].move()
    if (enemies[i].outOfBounds()) {
      enemies[i].element.remove()
      enemies.splice(i, 1)
    }
  }
}

export const getEnemies = () => enemies

export const destroyEnemyAt = (x, y) => {
  for (let i = 0; i < enemies.length; i++) {
    const ex = enemies[i].getX()
    const ey = enemies[i].getY()
    if (Math.abs(x - ex) < 40 && Math.abs(y - ey) < 40) {
      const points = enemies[i].destroy()
      enemies.splice(i, 1)
      return points
    }
  }
  return 0
}
