var warriorPic = document.createElement('img');
var worldPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
   picsToLoad--;
   console.log(picsToLoad);
   if (picsToLoad == 0) {
      imageLoadingDoneSoStartGame();
   }
}

function beginLoadingImage(imgVar, fileName) {
   imgVar.onload = countLoadedImagesAndLaunchIfReady;
   imgVar.src = 'images/' + fileName;
}

function loadImageForTrackCode(worldCode, fileName) {
   worldPics[worldCode] = document.createElement('img');
   beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
   var imageList = [
      { varName: warriorPic, theFile: 'warrior.png' },

      { worldType: TILE_GROUND, theFile: 'world_road.png' },
      { worldType: TILE_WALL, theFile: 'world_wall.png' },
      { worldType: TILE_GOAL, theFile: 'world_goal.png' },
      { worldType: TILE_KEY, theFile: 'world_tree.png' },
      { worldType: TILE_DOOR, theFile: 'world_flag.png' }
   ];

   picsToLoad = imageList.length;

   for (var i = 0; i < imageList.length; i++) {
      if (imageList[i].varName != undefined) {
         beginLoadingImage(imageList[i].varName, imageList[i].theFile);
      } else {
         loadImageForTrackCode(imageList[i].worldType, imageList[i].theFile);
      }
   }
}
