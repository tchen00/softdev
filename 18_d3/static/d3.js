// Team hallo - Tammy Chen & Grace Mao
// SoftDev pd9
// K18: Come Up For Air
// 2020-04-21

//var yes = "we";
var renderbtn = document.getElementById('render');
var transitionbtn = document.getElementById('transition');

var render = function(e){
  const new_cases = [];

  var i;
  for (i = 0; i < data.length; i++) {
    new_cases.push(data[i][0]);
  };
  //console.log(x(new_cases[0]) + 50);
  //var n = create(new_cases);
  //document.getElementsByTagName("body")[0].append(n);
  create(new_cases);
}


var transition = function(e){
  const hosp = [];
  var i;
  for (i = 0; i < data.length; i++) {
    hosp.push(data[i][1]);
  };

  d3.select("body").transition(create(hosp));

};


const create = function(data){
    console.log(data);
    var width = 1000;
    var x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]);
    var y = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([0, 15 * data.length]);

  const svg = d3.create("svg")
      .attr("width", width + 200)
      .attr("height", y.range()[1])
      .attr("font-family", "sans-serif")
      .attr("font-size", "10")
      .attr("text-anchor", "end");

  const bar = svg.selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", (d, i) => `translate(0,${y(i)})`);

  bar.append("rect")
      .attr("fill", "steelblue")
      .attr("width", x)
      .attr("height", y.bandwidth() - 1);

  bar.append("text")
      .attr("fill", "black")
      .attr("x", d => x(d + 225))
      .attr("y", y.bandwidth() / 2 + 3)
      .attr("dy", "0.35")
      .text(function(d, i) {
        return heading[i];
      });

  bar.append("text")
      .attr("fill", "white")
      .attr("x", d => x(d - 25))
      .attr("y", y.bandwidth() / 2 + 3)
      .attr("dy", "0.35")
      .text(function(d) {
        return d;
      });

  document.getElementsByTagName("body")[0].append(svg.node());
}


renderbtn.addEventListener('click', render);
transitionbtn.addEventListener('click', transition);
