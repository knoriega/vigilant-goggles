import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { ImageSource } from "excalibur";
import sword from "./images/sword.png"; // for parcelv2 this is configured in the .parcelrc

let Resources = {
  Sword: new ImageSource(sword),
  ExampleLevel: new TiledMapResource("tilemaps/example_level/example_level.tmx")
};

export { Resources };
