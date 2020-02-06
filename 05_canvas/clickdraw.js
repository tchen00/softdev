// Tammy Chen
// SoftDev2 pd9
// K05: ...and I want to Paint It Better
// 2020-02-07

var c = document.getElementById("slate")
var ctx = c.getContext("2d") // canvas instantiated

var cl = document.getElementById("clear");
var tog = document.getElementById("toggle");

var state = 0; // rectangle is 0, cirlce is 1

// clears canvas
var clear = function(e){
  ctx.clearRect(0, 0, c.width, c.height);
}

// change state to 0 or 1 (circle or rectangle)
var change_tog = function(e){
  state = !state;
}

var add_shape = function(e){
  // e.preventDefault(): prevents default execution of function
  e.preventDefault();
  if (state == 0){
    ctx.fillStyle = "#00FF00";
    // e.offsetX: returns x-coordinate of mouse click when an event is triggered
    // e.offsetY: returns y-coordinate of mouse click when an event is triggered
    ctx.fillRect(e.offsetX,e.offsetY,25,25);
  }
  else{
    console.log("ellipse");
    ctx.fillStyle = "#FF0000";
    ctx.beginPath(); // begins path / resets the current path -- resets the "pen" point, no weird shapes
    ctx.ellipse(e.offsetX,e.offsetY,10, 10, 0, 0, 2 * Math.PI);
    ctx.fill(); // you have to fill ellipse (or else invisible)
  }
}

cl.addEventListener('click', clear)
tog.addEventListener('click', change_tog);
c.addEventListener('click', add_shape);
