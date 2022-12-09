import TileMap from "./TileMap.js";

const tileSize = 32;
const velocity = 2; // speed

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileMap = new TileMap(tileSize);
const pacMan = tileMap.getPackman(velocity);
const enemies = tileMap.getEnemies(velocity);

let gameOver = false;
let gameWin = false;
const gameOverSound = new Audio("sounds/gameOver.wav");
const gameWinSound = new Audio("sounds/gameWin.wav");

function gameLoop() {
  tileMap.draw(ctx);
  pacMan.draw(ctx, pause(), enemies);
  enemies.forEach((enemy) => {
    enemy.draw(ctx, pause(), pacMan);
  });
  checkGameOver();
}

function checkGameOver() {
  if (!gameOver) {
    gameOver = isGameOver();
    if (gameOver) {
      gameOverSound.play();
    }
  }
}

function isGameOver() {
  return enemies.some(
    (enemy) => !pacMan.powerDotActive && enemy.collideWith(pacMan)
  );
}

function pause() {
  return !pacMan.madeFirstMove || gameOver;
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);
