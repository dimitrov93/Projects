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
  drawGameEnd();
  pacMan.draw(ctx, pause(), enemies);
  enemies.forEach((enemy) => {
    enemy.draw(ctx, pause(), pacMan);
  });
  checkGameOver();
  checkGameWin();
}

function checkGameWin() {
  if (!gameWin) {
    gameWin = tileMap.didWin();
    if (gameWin) {
      gameWinSound.play();
    }
  }
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
  return !pacMan.madeFirstMove || gameOver || gameWin;
}

function drawGameEnd() {
  let text = "";
  
  if (gameOver || gameWin) {
    text = "  You Win!";
    if (gameOver) {
      text = "Game Over";
    }
    ctx.fillRect(0, canvas.height / 3.2, canvas.width, 80);
    ctx.font = "75px arial";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "white");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    ctx.fillStyle = gradient;
    ctx.fillText(text, 10, canvas.height / 2);
  }
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);
