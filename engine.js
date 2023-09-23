/*
  Quick-Start:
  - ctx
  - Keys
  - Cam
  - toScreen()
*/


const ctx = myCanvas.getContext("2d");
const Keys = {w: false, a: false, s: false, d: false};
const Cam = {x: 0, y: 0, z: 0};

/**
 * Converts a game position to a screen position.
 * @param {Position} pos - The game position.
 * @returns {Position} The converted screen position.
 */
function toScreen(pos = {x: 0, y: 0}) {
  return {x: (pos.x - Cam.x) * Cam.z, y: (pos.y - Cam.y) * Cam.z};
}

/**
 * Draws a rectangle.
 * @param {Position} pos - The topleft position of rectangle.
 * @param {Size} size - The size of the rectangle.
 */
function drawRect(pos = {x: 0, y: 0}, size = {w: 32, h: 32}) {
  ctx.fillRect(pos.x, pos.y, size.w, size.h);
}

/**
 * Handles keyboard input.
 *
 * @param {KeyboardEvent} key - Event from addEventListener.
 * @param {boolean} keydown - Event is keydown or keyup?
 */
function keyHandler(key, keydown = false) {
  Keys[key.key] = keydown;
}

addEventListener("keydown", k => (keyHandler(k, true)));
addEventListener("keyup", k => (keyHandler(k, false)));