import { game } from "./game";

export class Cannon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.topX = x - 10;
    this.topY = y - 45;
    this.angle = 0;
    this.image = document.getElementById("cannon");

    game.gameObjects.push(this);
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y - 25);
    ctx.rotate(this.angle);
    ctx.translate(-this.x, -(this.y - 25));

    ctx.drawImage(this.image, this.x - 10, this.y - 45, 50, 25);
  }

  rotateTop(position) {
    if (!position) return;
    let angle = Math.atan2(
      position.y - this.y + 45 / 2,
      position.x - this.x + 10 / 2
    );
    if (angle < -1 || angle > 1.3) return;
    this.angle = angle;
  }
}
