import { Engine, Loader } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      fixedUpdateFps: 60,
      antialiasing: false
    });
  }
  initialize() {

    const player = new Player();
    this.add(player);

    const loader = new Loader([Resources.Sword]);
    loader.suppressPlayButton = true
    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
