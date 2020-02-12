



var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');

var growth = 0;
var requestID = 0;
var radius = 5;

ctx.fillStyle = "#00ffff";


var clear_canvas = function(){
  ctx.clearRect(0,0,500,500);
}

var drawDot = function(){
  // if the circle is set to grow mode and the radius exceeds 200
  if (growth == 10 && radius >= 200){
    growth = -10;
  }
  else if (growth == -10 && radius <= 0){
    growth = 10;
  }
  radius += growth;

  clear_canvas();
  ctx.beginPath();
  ctx.arc( canvas.width / 2, canvas.height/2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function(){
  window.cancelAnimationFrame(requestID);
  growth = 0;
};

dotButton.addEventListener('click', function(e){
  if(growth == 0){
    growth = 10;
    drawDot();
  }
});



stopButton.addEventListener('click', stopIt);
