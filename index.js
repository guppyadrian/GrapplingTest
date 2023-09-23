const MainCharacter = new Character();

/**
 * Runs every frame.
 */
function Tick() {
  MainCharacter.moveByVector(getMovement());
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  MainCharacter.draw();
}

setInterval(Tick, 16.67);