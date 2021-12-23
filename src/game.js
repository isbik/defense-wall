export class Game {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.gameObjects = [];
    this.ctx = canvas.getContext("2d");
  }

  update() {
    this.gameObjects.forEach((go) => {
      go.update(game);
    });
  }

  render() {
    this.gameObjects.forEach((go) => {
      go.draw(this.ctx);
    });
  }
}

export const game = new Game(document.querySelector("canvas"));
