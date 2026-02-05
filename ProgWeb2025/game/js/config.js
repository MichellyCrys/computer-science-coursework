export const FPS = 100
export const TAMX = 600
export const TAMY = 900

export const PROB_ENEMY_SHIP = 0.01  
// Tipos de inimigos
export const ENEMY_TYPES = [
  {
    name: "enemyShip",
    src: "assets/png/enemyShip.png",
    points: 50,
    minSpeed: 1,
    maxSpeed: 2.5
  },
  {
    name: "enemyUFO",
    src: "assets/png/enemyUFO.png",
    points: 20,
    minSpeed: 2,
    maxSpeed: 3.5
  },
  {
    name: "meteorBig",
    src: "assets/png/meteorBig.png",
    points: 10,
    minSpeed: 1,
    maxSpeed: 2
  },
  {
    name: "meteorSmall",
    src: "assets/png/meteorSmall.png",
    points: 100,
    minSpeed: 3,
    maxSpeed: 5
  }
]
