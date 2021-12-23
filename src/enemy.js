const enemyImage = document.getElementById("enemy");
export let lives = 3;

export class Enemy {
  constructor(x, y, radius) {
    this.radius = radius;
    this.maxHealth = radius * 5;
    this._health = this.maxHealth;
    this.image = enemyImage;
    this.x = x;
    this.y = y;
  }

  set health(value) {
    this._health = Math.max(0, value);
  }

  get health() {
    return this._health;
  }

  damage(value) {
    this._health -= value;
    if (this._health <= 0) this.deleted = true;
  }

  setSprite(image) {
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );

    if (this.maxHealth === this._health) return;

    let width = (this._health / this.maxHealth) * this.radius * 1.5;
    ctx.fillStyle = "green";
    ctx.fillRect(this.x - width / 2, this.y - this.radius - 10, width, 4);
  }

  update() {
    this.x -= 2;
    if (this.x + this.radius < 0) {
      this.deleted = true;
      lives -= 1;
    }
  }
}
