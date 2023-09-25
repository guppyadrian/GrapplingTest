/**
 * Represents a sprite.
 */
class Sprite {
  /**
   * Create a Sprite.
   * @param {Position} pos - The initial position of the sprite.
   */
  constructor(pos = {x: 0, y: 0}) {
    this._pos = pos;
    this._size = {w: 32, h: 32};
  }

  /**
   * Returns sprite position.
   */
  get pos() {
    return this._pos;
  }

  /**
   * Returns sprite size.
   */
  get size() {
    return this._size;
  }

  /**
   * Draw the sprite.
   */
  draw() {
    drawRect(this.pos, this.size);
  }

}