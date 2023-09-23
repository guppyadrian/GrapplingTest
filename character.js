class Character extends Sprite {
  constructor(pos = {x: 0, y: 0}) {
    super(pos);

    this._speed = 5;
  }

  /**
   * Returns sprite speed.
   */
  get speed() {
    return this._speed;
  }
  
  /**
   * Should run every frame.
   */
  tick() {
    
  }
  
  /**
   * Moves the Sprite by a position.
   * @param {Position} pos - The position to move the Sprite by.
   */
  move(pos = {x: 0, y: 0}) {
    this.pos.x += pos.x;
    this.pos.y += pos.y;
  }

  /**
   * Moves the Sprite multiplied by its speed.
   * @param {Position} pos - The normalized vector to move by.
   */
  moveByVector(pos = {x: 0, y: 0}) {
    this.move({x: pos.x * this.speed, y: pos.y * this.speed});
  }
}

/**
 * Returns a position based off WASD controls.
 * @returns {Position}
 */
function getMovement() {
  let xVel = Keys.d - Keys.a;
  let yVel = Keys.s - Keys.w;
  /* If diagonal movement then divide by 1.4 */
  if (Math.abs(xVel) + Math.abs(yVel) >= 2) {
    xVel /= 1.4;
    yVel /= 1.4;
  }
  return {x: xVel, y: yVel};
}