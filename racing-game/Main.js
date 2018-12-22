var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var canvas, canvasContext;

window.onload = function() {
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;

   colorRect(0, 0, canvas.width, canvas.height, 'black');
   colorText('LOADING IMAGES', canvas.width / 2, canvas.height / 2, 'white');

   loadImages();
};

function imageLoadingDoneSoStartGame() {
   var framesPerSecond = 30;
   setInterval(updateAll, 1000 / framesPerSecond);

   setupInput();
   loadImages();
   carReset();
}

function updateAll() {
   moveAll();
   drawAll();
}

function moveAll() {
   carMove();

   carTrackHnadling();
}

function drawAll() {
   drawTracks();
   carDraw();
}
