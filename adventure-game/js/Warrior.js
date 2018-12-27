const PLAYER_MOVE_SPEED = 3.0;

function warriorClass() {
   this.x = 75;
   this.y = 75;
   this.myWarriorPic; // which picture to use
   this.name = 'Untitled Warrior';

   this.keyHeld_North = false;
   this.keyheld_South = false;
   this.keyHeld_West = false;
   this.keyHeld_East = false;

   this.controlKeyUp;
   this.controlKeyRight;
   this.controlKeyDown;
   this.controlKeyLeft;

   this.setUpInput = function(upKey, rightKey, downKey, leftKey) {
      this.controlKeyUp = upKey;
      this.controlKeyRight = rightKey;
      this.controlKeyDown = downKey;
      this.controlKeyLeft = leftKey;
   };

   this.reset = function(whichImage, warriorName) {
      this.name = warriorName;
      this.myWarriorPic = whichImage;

      for (let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
         for (let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            if (worldGrid[arrayIndex] == TILE_PLAYERSTART) {
               worldGrid[arrayIndex] = TILE_GROUND;
               this.ang = -Math.PI / 2;
               this.x = eachCol * WORLD_W + WORLD_W / 2;
               this.y = eachRow * WORLD_H + WORLD_H / 2;

               return;
            } // end of player start if
         } // end of col for
      } // end of row for
      console.log('No Player Start Found!');
   }; // end of warriorReset func

   this.move = function() {
      var nextX = this.x;
      var nextY = this.y;

      if (this.keyHeld_North) {
         nextY -= PLAYER_MOVE_SPEED;
      }
      if (this.keyHeld_East) {
         nextX += PLAYER_MOVE_SPEED;
      }
      if (this.keyheld_South) {
         nextY += PLAYER_MOVE_SPEED;
      }
      if (this.keyHeld_West) {
         nextX -= PLAYER_MOVE_SPEED;
      }

      var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);

      if (walkIntoTileIndex == TILE_GOAL) {
         console.log(this.name + ' WINS!');
         loadLevel(levelOne);
      } else if (walkIntoTileIndex == TILE_GROUND) {
         this.x = nextX;
         this.y = nextY;
      }
   };

   this.draw = function() {
      drawBitmapCenteredWithRotation(this.myWarriorPic, this.x, this.y, 0);
   };
}
