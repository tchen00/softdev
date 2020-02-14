// Tammy Chen & Grace Mao (Team Wiggles)
// SoftDev2 pd9
// K08: What is it saving the screen from?
// 2020-02-14

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var mode = 0; // 0 for none, 1 for circle, 2 for dvd
var requestID = 0;

// dot stuff
var growth = 1; // increment value
var radius = 5;
ctx.fillStyle = "#00ffff";

// dvd stuff
var img = new Image();
img.src = "superman.png";
var x = 0;
var y = 0;
var xchange = 1;
var ychange = 1;

// clear the canvas when needed
var clear_canvas = function(){
  ctx.clearRect(0,0,500,500);
}

// dot animation
var drawDot = function(){
  if (growth == 1 && radius >= 200){
    // reverse (smaller)
    growth = -1;
  } else if (growth == -1 && radius == 0){
    // larger
    growth = 1;
  }
  radius += growth;
  clear_canvas(); // wipe it everytime cuz thats how animation works
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height/2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if (requestID != 0) {
    // console.log(requestID);
    requestID = window.requestAnimationFrame(drawDot); //starts an animation frame request
  }
};

// dvd animation
var drawDvd = function(e) {
  // horizontal bounds
  if (x > canvas.width - 100) {
    xchange = -1;
  } else if (x < 0) {
    xchange = 1;
  }
  // vertical bounds
  if (y > canvas.height - 75) {
    ychange = -1;
  } else if (y < 0) {
    ychange = 1;
  }
  x += xchange;
  y += ychange;
  clear_canvas();
  ctx.drawImage(img, x, y, 100, 75);
  if (requestID != 0) {
    requestID = window.requestAnimationFrame(drawDvd);
  }
}

// stop all animations
var stopIt = function(){
  window.cancelAnimationFrame(requestID); //cancels an animation frame request
  growth = 1;
  mode = 0;
  requestID = 0;
};

dotButton.addEventListener('click', function(e){
  if (mode != 1) {
    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(drawDot);
    //drawDot();
    mode = 1;
  }
});

dvdButton.addEventListener('click', function(e){
  if (mode != 2) {
    window.cancelAnimationFrame(requestID);
    x = Math.floor(Math.random() * (canvas.width - 100));
    y = Math.floor(Math.random() * (canvas.height - 75));
    requestID = window.requestAnimationFrame(drawDvd);
    //drawDvd();
    mode = 2;
  }
})

stopButton.addEventListener('click', stopIt);
