// Team hallo - Tammy Chen & Grace Mao
// SoftDev pd9
// K18: Come Up For Air
// 2020-04-21

var renderbtn = document.getElementById('render');
var transitionbtn = document.getElementById('transition');
var title = document.getElementById('title');

var svg;
var x,y;
var width = 1225;
var height = 500;
var count = 0; // keeps track of which transition

var new_cases = [];
var hosp = [];
var deaths = [];

// ARRAYS CREATED TO FIND MAX VALUES FOR CORRECT SCALING
var i;
for (i = 0; i < data.length; i++) {
    new_cases.push(data[i][0]);
    hosp.push(data[i][1]);
    deaths.push(data[i][2]);
};

var render = function(e){
    title.innerHTML = "New Cases"; // change title

    // HEIGHT OF BAR
    x = d3.scaleLinear()
              .domain([0, d3.max(new_cases)])
              .range([0, height - 50]);

    // WIDTH OF BAR
    y = d3.scaleBand()
              .domain(heading)
              .range([0, width]);

    //console.log(heading);

    svg = d3.create("svg")
                  .attr("width", width)
                  .attr("height", height + 200) // extra height needed for dates
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "10")
                  .attr("text-anchor", "end");

    // transform bar to correct location according to bandwidth
    var bar = svg.selectAll("g")
                    .data(data)
                    .join("g")
                    .attr("transform", (d, i) => `translate(${y(heading[i])}, 0)`);

    // scaled height, scale width, moved to x-axis line
    bar.append("rect")
        .attr("fill", "red")
        .attr("height", function(d) {
          return x(d[0]);
        })
        .attr("width", y.bandwidth() - 1) // -1 for padding
        .attr("y", function(d) {
          return height - x(d[0]);
        });

    // dates listed under x-axis line, rotated around origin of text to fit
    bar.append("text")
        .attr("class", "date")
        .attr("fill", "black")
        .attr("y", function(d) {
          return height + 10;
        })
        .attr("x", y.bandwidth() / 2 - 10)
        .attr("text-anchor", "start")
        .attr("transform", function(d) {
          return "rotate(45, " + (y.bandwidth() / 2 - 10) + ", " + (height + 10) + ")";
        })
        .text(function(d, i) {
            return heading[i];
        });

    // data numbers listed above bars
    bar.append("text")
        .attr("class", "label")
        .attr("fill", "black")
        .style("text-anchor", "middle")
        .attr("y", d => height - x(d[0]) - 5)
        .attr("x", y.bandwidth() / 2 - 1)
        .attr("dx", "0.35")
        .text(function(d) {
            return d[0];
        });

    document.getElementsByTagName("body")[0].append(svg.node());
};

var change = function(e){
    count += 1;
    console.log(count)

    if (count % 3 == 1){ // first transition, hospitalizations
      title.innerHTML = "Hospitalizations";

      x = d3.scaleLinear()
               .domain([0, d3.max(hosp)])
               .range([0, height - 50]);

      //console.log(x(data[0][1]));

      svg.selectAll("rect")
          .transition()
          .attr("height", function(d) {
                return x(d[1]);
          })
          .attr("y", function(d) {
            return height - x(d[1]);
          });

      svg.selectAll(".label")
          .transition()
          .attr("y", d => height - x(d[1]) - 5)
          .text(function(d) {
            return d[1];
          });

    };

    if (count % 3 == 2){ // second transition, deaths
      title.innerHTML = "Deaths";


      x = d3.scaleLinear()
               .domain([0, d3.max(deaths)])
               .range([0, height - 50]);

      //console.log(x(data[0][2]));

      svg.selectAll("rect")
          .transition()
          .attr("height", function(d) {
                return x(d[2]);
          })
          .attr("y", function(d) {
                return height - x(d[2]);
          });

      svg.selectAll(".label")
          .transition()
          .attr("y", d => height - x(d[2]) - 5)
          .text(function(d) {
            return d[2];
          });
    };

    if (count % 3 == 0){ // third transition, back to the start
      title.innerHTML = "New Cases";

      x = d3.scaleLinear()
               .domain([0, d3.max(new_cases)])
               .range([0, height - 50]);

      //console.log(x(data[0][1]));

      svg.selectAll("rect")
          .transition()
          .attr("height", function(d) {
                return x(d[0]);
          })
          .attr("y", function(d) {
                return height - x(d[0]);
          });

      svg.selectAll(".label")
          .transition()
          .attr("y", d => height - x(d[0]) - 5)
          .text(function(d) {
            return d[0];
          });
      };
};

renderbtn.addEventListener('click', function(e) {
    if (document.getElementsByTagName("svg")[0] == undefined) {
      // don't create again if it's already there
      render();
    }
});
transitionbtn.addEventListener('click', change);
