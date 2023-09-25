const GAME_FRAMERATE = 60;

const MainCharacter = new Character();

/**
 * Runs every frame.
 */
function Tick() {
  MainCharacter.moveByVector(getMovement());
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  MainCharacter.draw();
}

setInterval(Tick, 1000 / GAME_FRAMERATE);