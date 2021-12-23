const ballImage = document.getElementById("ball");

export class Ball {
  constructor(angle, x, y) {
    this.radius = 15;
    this.mass = this.radius;
    this.angle = angle;
    this.x = x;
    this.y = y;

    this.gravity = 0.05;
    this.elasticity = 0.5;
    this.friction = 0.008;

    this.dx = Math.cos(angle) * 7;
    this.dy = Math.sin(angle) * 7;
  }

  move() {
    const radius = this.radius;

    if (this.y + this.gravity + this.dy <= 600) {
      this.dy += this.gravity;
    }

    if (this.x <= radius - this.dx || this.x >= 800 - radius - this.dx) {
      this.dx *= -1;
      this.dy *= this.elasticity;
    }

    if (this.y <= radius - this.dy || this.y >= 600 - radius - this.dy) {
      this.dy *= -1;
      this.dy *= this.elasticity;
    }

    this.dx = this.dx - this.dx * this.friction;

    this.x += this.dx;
    this.y += this.dy;

    if (Math.abs(this.dx) < 0.05 && Math.abs(this.dy) < 0.05 && this.y > 520) {
      this.deleted = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      ballImage,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );

    ctx.fill();
  }
}
