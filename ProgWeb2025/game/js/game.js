import { FPS } from "./config.js"
import { space } from "./space.js"
import { ship } from "./ship.js"
import {
  createEnemies,
  moveEnemies,
  getEnemies,
  destroyEnemyAt
} from "./enemyShip.js"

let isGameRunning = false
let isGamePaused = false
let score = 0
let bullets = []

function updateScore() {
  document.getElementById("score").textContent = `Score: ${score}`
}

function createBullet() {
  const bullet = document.createElement("img")
  bullet.src = "assets/png/laserGreen.png"
  bullet.className = "bullet"
  bullet.style.position = "absolute"

  const shipX = ship.getX()
  const shipY = ship.getY()

  bullet.style.left = `${shipX + 45}px`
  bullet.style.bottom = `${shipY + 80}px`

  document.getElementById("space").appendChild(bullet)
  bullets.push(bullet)
}

function moveBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i]
    bullet.style.bottom = `${parseInt(bullet.style.bottom) + 8}px`

    const bulletX = parseInt(bullet.style.left)
    const bulletY = 900 - parseInt(bullet.style.bottom)

    const points = destroyEnemyAt(bulletX, bulletY)

    if (points > 0 || parseInt(bullet.style.bottom) > 1000) {
      bullet.remove()
      bullets.splice(i, 1)
      if (points > 0) {
        score += points
        updateScore()
      }
    }
  }
}

function checkCollisions() {
  const enemies = getEnemies()
  const sx = ship.getX()
  const sy = 900 - ship.getY() // considerando bottom

  for (let enemy of enemies) {
    const ex = enemy.getX()
    const ey = enemy.getY()
    if (Math.abs(sx - ex) < 40 && Math.abs(sy - ey) < 40) {
      ship.takeDamage()
      return
    }
  }
}

function gameOver() {
  isGameRunning = false
  document.getElementById("game-over").style.display = "flex"
}

function restartGame() {
  window.location.reload()
}

window.restartGame = restartGame

window.addEventListener("keydown", (e) => {
  if (e.key === " " && !isGameRunning) {
    isGameRunning = true
  } else if (e.key === " " && isGameRunning && !isGamePaused) {
    createBullet()
  } else if (e.key === "p" && isGameRunning) {
    isGamePaused = !isGamePaused
  } else if (isGameRunning && !isGamePaused) {
    if (e.key === "ArrowLeft") ship.changeDirection(-1)
    if (e.key === "ArrowRight") ship.changeDirection(+1)
  }
})

function run() {
  if (!isGameRunning || isGamePaused) return

  space.move()
  ship.move()
  createEnemies()
  moveEnemies()
  moveBullets()
  checkCollisions()
}

setInterval(run, 1000 / FPS)
