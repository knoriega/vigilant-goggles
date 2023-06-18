import { Engine, Loader } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      fixedUpdateFps: 60,
      antialiasing: false,
    });
  }
  initialize() {

    const player = new Player();
    this.add(player);

    const loader = new Loader([Resources.Sword, Resources.ExampleLevel]);
    loader.suppressPlayButton = true
    this.start(loader).then(function() {
      console.log("Game loaded")
      Resources.ExampleLevel.addTiledMapToScene(game.currentScene)
    })
  }
}

export const game = new Game();
game.initialize();
