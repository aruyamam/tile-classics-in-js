const WORLD_COLS = 16;
const WORLD_ROWS = 12;
// const WORLD_W = winWidth / WORLD_COLS;
// const WORLD_H = winHeight / WORLD_ROWS;
const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
// prettier-ignore
var levelOne = [
   4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
   1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 0, 1,
   1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0,
   1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0,
   1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 5, 0, 0,
   1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0,
   1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0,
   1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0,
   1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1
];

var worldGrid = [];
const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOAL = 3;
const WORLD_TREE = 4;
const WORLD_FLAG = 5;

function returnTileTypeAtColRow(col, row) {
   if (col >= 0 && col < WORLD_COLS && row >= 0 && row < WORLD_ROWS) {
      var worldIndexUnderCoord = rowColToArrayIndex(col, row);

      return worldGrid[worldIndexUnderCoord];
   } else {
      return WORLD_WALL;
   }
}

function getTileTypeAtPixelCoord(atX, atY) {
   var warriorWorldCol = Math.floor(atX / WORLD_W);
   var warriorWorldRow = Math.floor(atY / WORLD_H);
   var worldIndexUnderCar = rowColToArrayIndex(
      warriorWorldCol,
      warriorWorldRow
   );

   if (
      warriorWorldCol >= 0 &&
      warriorWorldCol < WORLD_COLS &&
      warriorWorldRow >= 0 &&
      warriorWorldRow < WORLD_ROWS
   ) {
      var tileHere = returnTileTypeAtColRow(warriorWorldCol, warriorWorldRow);

      return tileHere;
   }
}

function rowColToArrayIndex(col, row) {
   return col + WORLD_COLS * row;
}

function drawWorld() {
   var arrayIndex = 0;
   var drawTileX = 0;
   var drawTileY = 0;

   for (let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
         var tileKindHere = worldGrid[arrayIndex];
         var useImg = worldPics[tileKindHere];

         canvasContext.drawImage(useImg, drawTileX, drawTileY);

         drawTileX += WORLD_W;
         arrayIndex++;
      }

      drawTileY += WORLD_H;
      drawTileX = 0;
   }
}
