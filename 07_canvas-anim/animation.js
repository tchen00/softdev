// Tammy Chen & Grace Mao (Team Muhkolyk)
// SoftDev2 pd9
// K07: They lock us in the tower whenever we get caught
// 2020-02-12

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');

var growth = 1; // increment value
var requestID = 0;
var radius = 5;

ctx.fillStyle = "#00ffff";


var clear_canvas = function(){
  ctx.clearRect(0,0,500,500);
}

var drawDot = function(){
  if (growth == 1 && radius >= 200){
    // reverse (smaller)
    growth = -1;
  }
  else if (growth == -1 && radius == 0){
    //  larger
    growth = 1;
  }
  radius += growth;
  clear_canvas();
  ctx.beginPath();
  ctx.arc( canvas.width / 2, canvas.height/2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot); //starts an animation frame request
};

var stopIt = function(){
  window.cancelAnimationFrame(requestID); //cancels an animation frame request
  growth = 0;
};

dotButton.addEventListener('click', function(e){
  if (growth == 0){
    growth = 1;
    drawDot();
  }
  drawDot();
});
stopButton.addEventListener('click', stopIt);
