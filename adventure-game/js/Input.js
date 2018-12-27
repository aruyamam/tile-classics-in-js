const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38; // 74
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40; // 75

var mouseX = 0;
var mouseY = 0;

function setupInput() {
   canvas.addEventListener('mousemove', updateMousePos);

   document.addEventListener('keydown', keyPressed);
   document.addEventListener('keyup', keyReleased);

   blueWarrior.setUpInput(
      KEY_UP_ARROW,
      KEY_RIGHT_ARROW,
      KEY_DOWN_ARROW,
      KEY_LEFT_ARROW
   );
}

function updateMousePos(evt) {
   var rect = canvas.getBoundingClientRect();
   var root = document.documentElement;

   mouseX = evt.clientX - rect.left - root.scrollLeft;
   mouseY = evt.clientY - rect.top - root.scrollTop;

   // hack to test warrior in any position
   // warriorX = mouseX;
   // warriorY = mouseY;
   // warriorSpeedX = 4;
   // warriorSpeedY = -4;
}

function keySet(keyEvent, setTo) {
   if (keyEvent.keyCode === blueWarrior.controlKeyLeft) {
      blueWarrior.keyHeld_West = setTo;
   }
   if (keyEvent.keyCode === blueWarrior.controlKeyRight) {
      blueWarrior.keyHeld_East = setTo;
   }
   if (keyEvent.keyCode === blueWarrior.controlKeyUp) {
      blueWarrior.keyHeld_North = setTo;
   }
   if (keyEvent.keyCode === blueWarrior.controlKeyDown) {
      blueWarrior.keyheld_South = setTo;
   }
}

function keyPressed(evt) {
   evt.preventDefault();
   // console.log('Key pressed:' + evt.keyCode);
   keySet(evt, true);
}

function keyReleased(evt) {
   keySet(evt, false);
}
