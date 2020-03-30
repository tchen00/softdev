// Team "." - Tammy Chen & Joseph Lee
// SoftDev pd9
// K12: Connect the Dots
// 2020-03-30

var svg = document.getElementById("vimage");
var clear = document.getElementById("clear");

function add(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 50);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    return c;
}

function randLocation(min, max){
    return Math.floor((max - min) * Math.random()) + min;
}

svg.addEventListener("click", function(e){
    if(e.target.nodeName == "svg"){
        svg.appendChild(draw(e.clientX, e.clientY));
    }
});

svg.addEventListener("click", function(e){
    if(e.target.nodeName == "circle"){
        if(e.target.getAttribute("fill") == "blue"){
            e.target.setAttribute("fill", "green");
            e.target.setAttribute("stroke", "green");
        } else {
            svg.removeChild(e.target);
            svg.appendChild(draw(randLocation(0, 500), randLocation(0, 500)));
        }
    }
});

clear.addEventListener('click', function(e)){
  while(pic.firstChild){
      pic.removeChild(pic.firstChild);
  }
};
