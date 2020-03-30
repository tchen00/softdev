var pic = document.getElementById('vimage');
var clear = document.getElementById("clear");
pic.innerHTML = '';

var dot = (x,y) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 15);
  c.setAttribute("fill", "blue");
  c.setAttribute("stroke", "black");
  c.addEventListener('click', function(e) {
    changeColor(e, c); // adds color & delete
  });
  return c;
}

var draw = (e) => {
  var c = dot(e.offsetX, e.offsetY);
  pic.appendChild(c);
};


var changeColor = (e, c) => {
  if (c.getAttribute('fill') == 'blue'){
    // first click -- change color
    c.setAttribute('fill', 'cyan');
  }
  else if (c.getAttribute('fill') == 'cyan'){
    // second click -- random location
    var randchild = dot(Math.random() * 500, Math.random() * 500);
    pic.appendChild(randchild);
    c.remove();
  }
}

var clear = (e) => {
  pic.innerHTML='';
};

clear.addEventListener('click', clear);
