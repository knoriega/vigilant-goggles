import { Actor, CollisionType, Engine, Input, vec } from "excalibur";
import { Resources } from "./resources";
import { MOVEMENT_SPEED } from "./consts"

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100,
      collisionType: CollisionType.Active
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Sword.toSprite());
  }
  
  onPreUpdate(_engine: Engine, _delta: number): void {
    handleKeyboardMovement(this, _engine)
  }
}

function handleKeyboardMovement(actor: Actor, _engine: Engine): void {
    const keys = Input.Keys
    const keyboard = _engine.input.keyboard
    if (keyboard.isHeld(keys.W)) {
      actor.vel.y = -1
    }
    else if (keyboard.wasReleased(keys.W)) {
      actor.vel.y = 0
    }
    
    if (keyboard.isHeld(keys.A)) {
      actor.vel.x = -1
    } 
    else if (keyboard.wasReleased(keys.A)) {
      actor.vel.x = 0
    }
    
    if (keyboard.isHeld(keys.D)) {
      actor.vel.x = 1
    } 
    else if (keyboard.wasReleased(keys.D)) {
      actor.vel.x = 0
    }

    if (keyboard.isHeld(keys.S)) {
      actor.vel.y = 1
    }
    else if (keyboard.wasReleased(keys.S)) {
      actor.vel.y = 0
    }

    actor.vel.scaleEqual(MOVEMENT_SPEED)
}
