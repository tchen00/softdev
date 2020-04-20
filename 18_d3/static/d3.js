// Team hallo - Tammy Chen & Grace Mao
// SoftDev pd9
// K18: Come Up For Air
// 2020-04-21

//var yes = "we";
var renderbtn = document.getElementById('render');
var transitionbtn = document.getElementById('transition');

var render = function(e){
  const new_cases = [];
  /* COMMENTED OUT FOR NOW */
  console.log(data)
  var i;
  for (i = 0; i < data.length; i++) {
    new_cases.push(data[i][0]);
  };
  //new_cases.push(data[0][0]);
  //console.log(x(new_cases[0]) + 50);
  //var n = create(new_cases);
  //document.getElementsByTagName("body")[0].append(n);
  create(new_cases);
}


var change = function(e){
  // d3.select("body").html("");
  //body.innerHTML = "";
  const hosp = [];
  //hosp.push(data[0][1]);

  var i;
  for (i = 0; i < data.length; i++) {
    hosp.push(data[i][1]);
  };
  console.log(hosp)
  d3.select("body").transition(create(hosp));

};


const create = function(not){
  var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // Parse the date / time
  var	parseDate = d3.time.format("%m/%d/%y").parse;

  var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y-%m-%d"));

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("covid.csv", function(error, data) {

      data.forEach(function(d) {
          d.date = parseDate(d.date);
          d.cases = +int(float(d.cases));
      });

    x.domain(data.map(function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.cases; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value ($)");

    svg.selectAll("bar")
        .data(data)
      .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) { return x(d.date); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.cases); })
        .attr("height", function(d) { return height - y(d.cases); });
})};


renderbtn.addEventListener('click', create);
transitionbtn.addEventListener('click', change);

/* ALL FAILS
    console.log(data);
    var width = 1000;

    var x = d3.scaleTime()
      .domain(d3.extent(data, function(x) {return x.heading;}))
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
        .attr("x", function(d) {return x(d.date)})
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
    /*
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
  */
