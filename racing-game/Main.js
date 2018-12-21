var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var canvas, canvasContext;

window.onload = function() {
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight - 7;

   var framesPerSecond = 30;
   setInterval(updateAll, 1000 / framesPerSecond);

   setupInput();

   trackLoadImages();
   carImageLoad();
   carReset();
};

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
