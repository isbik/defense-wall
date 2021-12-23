import { Ball } from "./ball";
import { Cannon } from "./cannon";
import { Enemy, lives } from "./enemy";
import { game } from "./game";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const wallImage = document.getElementById("wall");
const bgImage = document.getElementById("bg");
const groundEnemyImage = document.getElementById("groundEnemy");

const startBtn = document.getElementById("start");
const menu = document.querySelector(".menu");

let pause = true;

startBtn.addEventListener("click", () => {
  pause = false;
  if (!pause) {
    requestAnimationFrame(init);
    menu.style.display = "none";
  }
});

let cannon = new Cannon(75, 575);
let enemies = [];
let mousePos;

let balls = [];

canvas.addEventListener("mousemove", (event) => {
  mousePos = {
    x: event.clientX - canvas.offsetLeft,
    y: event.clientY - canvas.offsetTop,
  };
  cannon.rotateTop(mousePos);
});

let progress = 0;
let timer = null;

window.addEventListener("mousedown", (event) => {
  timer = setInterval(() => {
    progress = Math.min(100, progress + 3);
  }, 10);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "w" && cannon.y > 100) {
    cannon.y -= 160;
  }
  if (event.key === "s" && cannon.y < 575) {
    cannon.y += 160;
  }
});

window.addEventListener("click", (event) => {
  clearInterval(timer);
  progress = 0;
});

window.addEventListener("mouseup", (event) => {
  let angle = cannon.angle;
  let dx = cannon.x + 15 - (cannon.x + 8);
  let dy = cannon.y - 30 - (cannon.y - 25);
  let distance = Math.sqrt(dx ** 2 + dy ** 2);
  let originalAngle = Math.atan2(dy, dx);

  let newX = cannon.x + 8 + distance * Math.cos(originalAngle + angle);
  let newY = cannon.y - 25 + distance * Math.sin(originalAngle + angle);

  for (let i = -1; i < 2; i++) {
    let ball = new Ball(angle, newX + i * 25, newY + i * 25);
    ball.dx = Math.cos(angle) * (7 + progress / 9);
    ball.dy = Math.sin(angle) * (7 + progress / 9);

    balls.push(ball);
  }

  clearInterval(timer);
  progress = 0;
});

function collide(index) {
  let ball = balls[index];

  for (let i = index + 1; i < balls.length; i++) {
    if (ballHitBall(ball, balls[i])) {
      collideBalls(ball, balls[i]);
    }
  }
}

function collideBalls(ball1, ball2) {
  let dx = ball2.x - ball1.x;
  let dy = ball2.y - ball1.y;
  let distance = Math.sqrt(dx ** 2, dy ** 2);

  let collision = { x: dx / distance, y: dy / distance };

  let relativeVelocity = { x: ball1.dx - ball2.dx, y: ball1.dy - ball2.dy };

  let speed =
    relativeVelocity.x * collision.x + relativeVelocity.y + collision.y;

  if (speed < 0) return;

  let impulse = (1.1 * speed) / (ball2.mass + ball1.mass);

  ball1.dx -= impulse * ball2.mass * collision.x;
  ball1.dy -= impulse * ball2.mass * collision.y;
  ball2.dx += impulse * ball1.mass * collision.x;
  ball2.dy += impulse * ball1.mass * collision.y;

  ball1.dy = ball1.dy * ball1.elasticity;
  ball2.dy = ball2.dy * ball2.elasticity;
}

function ballHitBall(ball1, ball2) {
  let dx = ball1.x - ball2.x;
  let dy = ball1.y - ball2.y;

  let distance = dx ** 2 + dy ** 2;

  if (distance <= (ball1.radius + ball2.radius) ** 2) {
    return true;
  }

  return false;
}

let scores = 0;

function gameOver() {
  pause = true;
  menu.style.display = "flex";

  const span = document.createElement("span");
  span.textContent = "Your scores: " + scores.toFixed();

  menu.appendChild(span);
}

function collideEnemy(enemy, ball) {
  let dx = ball.x - enemy.x;
  let dy = ball.y - enemy.y;

  let distance = dx ** 2 + dy ** 2;

  if (distance <= (ball.radius + enemy.radius) ** 2) {
    enemy.x += (ball.dx * 2 * 25) / enemy.radius;
    enemy.damage(Math.abs(ball.dx) + 50);
    ball.deleted = true;
    scores += (50 - enemy.radius) * 2;
  }

  return false;
}

setInterval(() => {
  let y = Math.random() * 300 + 50;
  enemies.push(new Enemy(800, y, Math.random() * 20 + 20));

  let enemy = new Enemy(800, game.height - 40, 35);
  enemy.setSprite(groundEnemyImage);
  enemies.push(enemy);
}, 2000);

function init() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

  for (let i = 0; i < canvas.height; i += 160) {
    ctx.drawImage(wallImage, 0, i - 40, 80, 200);
  }

  if (lives === 0) {
    gameOver();
  }

  if (pause) return;

  game.render();

  ctx.fillStyle = progress > 50 ? "red" : "green";
  ctx.fillRect(cannon.x - 20, cannon.y - 50, progress / 2, 10);
  ctx.restore();

  balls.forEach((ball, index) => {
    ball.move();
    collide(index);

    enemies.forEach((enemy) => {
      collideEnemy(enemy, ball);
    });
    ball.draw(ctx);
  });

  enemies.forEach((enemy, index) => {
    enemy.update();
    enemy.draw(ctx);
  });

  ctx.font = "bold 22pt Courier";
  ctx.fillText("Scores:" + scores.toFixed(0), 10, 30);
  ctx.font = "bold 16pt Courier";
  ctx.fillText("Lives:" + lives, 10, 55);

  balls = balls.filter(({ deleted }) => !deleted);
  enemies = enemies.filter(({ deleted }) => !deleted);

  requestAnimationFrame(init);
}

requestAnimationFrame(init);
