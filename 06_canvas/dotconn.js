/*
Tammy Chen
SoftDev2 pd9
K06: Dot Dot Dot
2020-02-11
*/

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var clear = document.getElementById("clear");

var clear_canvas = function(e){
  ctx.beginPath(); // starts or resets current path
  ctx.clearRect(0,0,600,600);
}

var add_ellipse = function(e){
  fill_ellipse(e.offsetX, e.offsetY);
  fill_line(e.offsetX, e.offsetY);
}

var fill_ellipse = (x,y) => {
  ctx.fillStyle = "#37D1FF";
  ctx.ellipse(x,y,5, 5, 0, 0, 2 * Math.PI);
  ctx.fill(); // fills the interior of the path, will not work if the path has fewer than 3 points in it.

}

var fill_line = (x,y) => {
  ctx.moveTo(x,y);
  ctx.stroke(); // renders all the lines in the path, does not end the path.
}

clear.addEventListener('click', clear_canvas);
canvas.addEventListener('click', add_ellipse);
