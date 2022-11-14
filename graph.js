let svg;
let xScale, yScale;
let widthD3, heightD3;
let widthD4, heightD4;


let test = null;

var momentumData1 = [];
var momentumData22 = [];
var momentumData3 = [];

var kineticData = [];

var momentumData2 = [];
var kineticData2 = [];

var distance_particle = 1;

var r = 90;

var dataset_generation = [
  {
    "time": 1,
    "num": 0,
    "g": 100,
    "pairs": 0
  },
  {
    "time": 2,
    "num": 1,
    "g": 100,
    "pairs": 10
  },
  {
    "time": 3,
    "num": 3.9601,
    "g": 100,
    "pairs": 19.9
  },
  {
    "time": 4,
    "num": 8.704854259,
    "g": 100,
    "pairs": 29.50399
  },
  {
    "time": 5,
    "num": 14.92547676,
    "g": 100,
    "pairs": 38.6335046
  },
  {
    "time": 6,
    "num": 22.22269817,
    "g": 100,
    "pairs": 47.1409569
  },
  {
    "time": 7,
    "num": 30.16062191,
    "g": 100,
    "pairs": 54.9186871
  },
  {
    "time": 8,
    "num": 38.31934968,
    "g": 100,
    "pairs": 61.9026249
  },
  {
    "time": 9,
    "num": 46.33618826,
    "g": 100,
    "pairs": 68.0706899
  },
  {
    "time": 10,
    "num": 53.93003411,
    "g": 100,
    "pairs": 73.4370711
  },
  {
    "time": 11,
    "num": 60.90876501,
    "g": 100,
    "pairs": 78.0440677
  },
  {
    "time": 12,
    "num": 67.16325545,
    "g": 100,
    "pairs": 81.9531912
  },
  {
    "time": 13,
    "num": 72.65323264,
    "g": 100,
    "pairs": 85.2368656
  },
  {
    "time": 14,
    "num": 77.38992268,
    "g": 100,
    "pairs": 87.9715424
  },
  {
    "time": 15,
    "num": 81.41913099,
    "g": 100,
    "pairs": 90.2325501
  },
  {
    "time": 16,
    "num": 84.80685425,
    "g": 100,
    "pairs": 92.090637
  },
  {
    "time": 17,
    "num": 87.62823035,
    "g": 100,
    "pairs": 93.6099516
  },
  {
    "time": 18,
    "num": 89.95977794,
    "g": 100,
    "pairs": 94.8471285
  },
  {
    "time": 19,
    "num": 91.87443101,
    "g": 100,
    "pairs": 95.8511508
  },
  {
    "time": 20,
    "num": 93.43872377,
    "g": 100,
    "pairs": 96.6637077
  },
  {
    "time": 21,
    "num": 94.71150338,
    "g": 100,
    "pairs": 97.3198353
  },
  {
    "time": 22,
    "num": 95.74365144,
    "g": 100,
    "pairs": 97.8486849
  },
  {
    "time": 23,
    "num": 96.57841931,
    "g": 100,
    "pairs": 98.2743198
  },
  {
    "time": 24,
    "num": 97.25209706,
    "g": 100,
    "pairs": 98.6164779
  },
  {
    "time": 25,
    "num": 97.79482918,
    "g": 100,
    "pairs": 98.8912682
  },
  {
    "time": 26,
    "num": 98.23145973,
    "g": 100,
    "pairs": 99.1117852
  },
  {
    "time": 27,
    "num": 98.58233887,
    "g": 100,
    "pairs": 99.2886393
  },
  {
    "time": 28,
    "num": 98.86405514,
    "g": 100,
    "pairs": 99.4304054
  },
  {
    "time": 29,
    "num": 99.09007909,
    "g": 100,
    "pairs": 99.5439999
  },
  {
    "time": 30,
    "num": 99.27131622,
    "g": 100,
    "pairs": 99.634992
  },
  {
    "time": 31,
    "num": 99.41657412,
    "g": 100,
    "pairs": 99.7078603
  },
  {
    "time": 32,
    "num": 99.53295245,
    "g": 100,
    "pairs": 99.7662029
  },
  {
    "time": 33,
    "num": 99.62616539,
    "g": 100,
    "pairs": 99.8129077
  },
  {
    "time": 34,
    "num": 99.7008064,
    "g": 100,
    "pairs": 99.8502911
  },
  {
    "time": 35,
    "num": 99.76056449,
    "g": 100,
    "pairs": 99.8802105
  },
  {
    "time": 36,
    "num": 99.80839996,
    "g": 100,
    "pairs": 99.904154
  },
  {
    "time": 37,
    "num": 99.84668691,
    "g": 100,
    "pairs": 99.9233141
  },
  {
    "time": 38,
    "num": 99.87732837,
    "g": 100,
    "pairs": 99.9386454
  },
  {
    "time": 39,
    "num": 99.90184914,
    "g": 100,
    "pairs": 99.9509125
  },
  {
    "time": 40,
    "num": 99.92147064,
    "g": 100,
    "pairs": 99.9607276
  },
  {
    "time": 41,
    "num": 99.93717096,
    "g": 100,
    "pairs": 99.9685805
  },
  {
    "time": 42,
    "num": 99.94973322,
    "g": 100,
    "pairs": 99.9748634
  },
  {
    "time": 43,
    "num": 99.9597843,
    "g": 100,
    "pairs": 99.9798901
  },
  {
    "time": 44,
    "num": 99.96782598,
    "g": 100,
    "pairs": 99.9839117
  },
  {
    "time": 45,
    "num": 99.97425986,
    "g": 100,
    "pairs": 99.9871291
  },
  {
    "time": 46,
    "num": 99.97940729,
    "g": 100,
    "pairs": 99.9897031
  },
  {
    "time": 47,
    "num": 99.98352545,
    "g": 100,
    "pairs": 99.9917624
  },
  {
    "time": 48,
    "num": 99.98682011,
    "g": 100,
    "pairs": 99.9934098
  },
  {
    "time": 49,
    "num": 99.98945594,
    "g": 100,
    "pairs": 99.9947278
  },
  {
    "time": 50,
    "num": 99.99156465,
    "g": 100,
    "pairs": 99.9957822
  },
  {
    "time": 51,
    "num": 99.99325165,
    "g": 100,
    "pairs": 99.9966258
  },
  {
    "time": 52,
    "num": 99.99460128,
    "g": 100,
    "pairs": 99.9973006
  },
  {
    "time": 53,
    "num": 99.995681,
    "g": 100,
    "pairs": 99.9978405
  }
 ];

 //changing 
var globalX = 0;
var data = [];
var data_2 = [];
var step = 1;

var globalX_c = 0;
var data_c = [];
var data_2_c = [];
var step = 1;

var globalX_c_2 = 0;
var data_c_2 = [];
var data_2_c_2 = [];
// var step = 1;

//generation

var globalX_t = 0;
var data_t = [];
var data_2_t = [];
var step_t = 1;

var globalX_g_t = 0;
var data_g_t = [];
var data_2_g_t = [];
var step_g_t = 1;

//re

var globalX_r = 0;
var data_r = [];
var data_2_r = [];
var step_r = 1;

var globalX_r_t = 0;
var data_r_t = [];
var data_2_r_t = [];
var step_r_t = 1;

var generation_R = 100;
var generation_Rate; 
var generation_Rate_c; 
var current_Electron = 0;
var current_Hole = 0; 
var current_Electron_c = 0;
var current_Hole_c = 0; 
var constant_EH = 0.0000001;
var recombination_R = 0;
var recombination_Rate = 1;
var recombination_Rate_c = 1;
var ni; 
var constant_beta = Math.pow(10,-12);

updatefourlevels = (orbitalCount) => {

  heightD3 = 500,
    widthD3 = 350;
  d3.selectAll('#d3-viz5').selectAll('#sigma').remove();
  d3.selectAll('#d3-viz5').selectAll('#sigmastar').remove();

  yScalePlus = d3.scaleLinear()
    .domain([(orbitalCount + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  yScaleMinus = d3.scaleLinear()
    .domain([-10, -(orbitalCount + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

  for (let i = 1; i <= orbitalCount; i++) {
    d3.selectAll('#d3-viz5')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScalePlus(i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScalePlus(i * 10))
      .on('mouseover', function () {
        d3.select(this).attr('stroke-width', 4);
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 0.2);

        d3.selectAll('#d3-viz5')
          .append('line')
          .attr('class', 'electron')
          .attr('stroke-width', 4)
          .attr('stroke', colors.yellow)
          .attr('x1', widthD3 / 3)
          .attr('x2', widthD3 / 3)
          .attr('y1', yScalePlus(i * 10) - 10)
          .attr('y2', yScalePlus(i * 10) + 10);

        d3.selectAll('#d3-viz5')
          .append('line')
          .attr('class', 'electron')
          .attr('stroke-width', 4)
          .attr('stroke', colors.yellow)
          .attr('x1', 2 * widthD3 / 3)
          .attr('x2', 2 * widthD3 / 3)
          .attr('y1', yScalePlus(i * 10) - 10)
          .attr('y2', yScalePlus(i * 10) + 10);

        d3.selectAll('#d3-viz5')
          .append('text')
          .attr('id', 'text-label')
          .text("2 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke-width', 2);
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 1);
        d3.selectAll('#d3-viz5').selectAll('.electron').remove();

        d3.selectAll('#d3-viz5').select('#text-label').remove();
      });

    // d3.select('#d3-viz5')
    //   .append('circle')
    //   .attr('id', 'sigma')
    //   .attr('fill', colors.yellow)
    //   .attr('cx', widthD3 / 3)
    //   .attr('cy', yScalePlus(i * 10))
    //   .attr('r', 4);

    // d3.select('#d3-viz5')
    //   .append('circle')
    //   .attr('id', 'sigma')
    //   .attr('fill', colors.yellow)
    //   .attr('cx', 2 * widthD3 / 3)
    //   .attr('cy', yScalePlus(i * 10))
    //   .attr('r', 4);

    d3.selectAll('#d3-viz5')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScaleMinus(-i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScaleMinus(-i * 10))
      .on('mouseover', function () {
        d3.select(this).attr('stroke-width', 4);

        d3.selectAll('#d3-viz5')
          .append('text')
          .attr('id', 'text-label')
          .text("0 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke-width', 2);

        d3.selectAll('#d3-viz5').select('#text-label').remove();
      });
  }
}


//last scene
electronHoleGraph = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 170;


  svgpe = d3.selectAll('#pe-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([1, 33770176900]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([1, 33770176900])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
    .scale(yScale).ticks(5);



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe.append('path')
    .attr("stroke", '#7DF194')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  var path_2 = svgpe.append('path')
    .attr("stroke", '#F1E77D')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  

  var areaPath = svgpe.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","#7DF194");
  
  var areaPath_2 = svgpe.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#F1E77D");


  svgpe.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Rate (pairs/s*cm^3)");


  // Handmade legend
  svgpe.append("line")
  .attr("x1", 40)
  .attr("y1", 10)
  .attr("x2", 50)
  .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  .style("stroke-width", 1);

  svgpe.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "#7DF194").style("stroke", "#7DF194")
  .style("stroke-width", 1);



  // svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
  svgpe.append("text").attr("x", 60).attr("y", 10).text("generation").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none")  //yellow
  svgpe.append("text").attr("x", 60).attr("y", 30).text("recombination ").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none").attr("stroke-opacity", 0.2);

    // svgpe.append('line')
    // .attr('id', 'trendline')
    // .attr('stroke', 'none');


    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX,
        y: generation_Rate_c
        
	    };
	    data_2.push(point_2);
      
      var point = {
		    x: globalX,
        y: (recombination_Rate_c)
        
	    };
      data.push(point);
      
  

if (time_count ==0) {
      if (electron_add >0 || hole_add>0) {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
          
      
          globalX += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));

          time_count_graph=1 
        }  else {
          globalX += step;
        }

       

      } else {

        if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
        generation_Rate_c = 0.01*ni;
        
    
        globalX += step;
        
        current_Electron_c += generation_Rate_c-recombination_Rate_c; 
        current_Hole_c += generation_Rate_c-recombination_Rate_c;
        recombination_Rate_c = current_Electron_c*0.01;
        time_count_graph=1
        } else {
          globalX += step;
        
        }
      }
    } else {
      globalX += step;
    }

       
  

	    // Draw new line
	   
        
      path_2.datum(data_2)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // Draw new fill area
	    // areaPath_2.datum(data_2)
      // .attr('class', 'area')
      // .attr('d', lineArea);

      path.datum(data)
      .attr('class', 'smoothline')
      .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX - (max - step), globalX]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data.length > 199) {data.shift();}
      if (data_2.length > 199) {data_2.shift();}
    };

    tick();


  


}


// graph1 
electronHoleGraph_tot = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 340;


  svgpe_c = d3.selectAll('#pe-viz_c')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([1, 4200000000000000]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([1, 4200000000000000])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
  .scale(yScale).ticks(7);



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_c.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe_c.append('path')
              .attr("stroke", '#F1E77D')
              .attr("stroke-width", 2)
              .attr('id', 'area');
          
 var path_2 = svgpe_c.append('path')
              .attr("stroke", '#7DF194')
              .attr("stroke-width", 2)
              .attr('id', 'area');

  // var path = svgpe_c.append('path')
  //   .attr("stroke", 'white')
  //   .attr("stroke-width", 2)
  //   .attr('id', 'area');

  // var path_2 = svgpe_c.append('path')
  //   .attr("stroke", 'white')
  //   .attr("stroke-width", 2)
  //   .attr('id', 'area');

  

  var areaPath = svgpe_c.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","white");
  
  var areaPath_2 = svgpe_c.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#white");


  svgpe_c.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_c.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_c.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Density (pairs/cm^3)");


  // Handmade legend
  // svgpe_g.append("line")
  // .attr("x1", 140)
  // .attr("y1", 10)
  // .attr("x2", 150)
  // .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  // .style("stroke-width", 1);

  svgpe_c.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "#404080").style("stroke", "white")
  .style("stroke-width", 1);

  svgpe_c.append("line")
  .attr("x1", 40)
  .attr("y1", 10)
  .attr("x2", 50)
  .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "white")
  .style("stroke-width", 1);




  // svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
  //svgpe_g.append("text").attr("x", 160).attr("y", 10).text("generation rate").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none")  //yellow
  svgpe_c.append("text").attr("x", 60).attr("y", 30).text("holes").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none");
  svgpe_c.append("text").attr("x", 60).attr("y", 10).text("electrons").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none");

    // svgpe.append('line')
    // .attr('id', 'trendline')
    // .attr('stroke', 'none');


    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX_c,
        y: current_Hole_c
        
	    };
	    data_2_c.push(point_2);
      
      var point = {
		    x: globalX_c,
        y: (current_Electron_c)
        
	    };
      data_c.push(point);

 
  


 
      

  
        // ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
        // generation_Rate_c = 0.01*ni;
        
    
        // globalX_c += step;
        
        // current_Electron_c += generation_Rate_c-recombination_Rate_c; 
        // current_Hole_c += generation_Rate_c-recombination_Rate_c;
        // recombination_Rate_c = current_Electron_c*0.01;
   

if (time_count ==0){
        if (electron_add >0 || hole_add>0) {

          if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
          

          globalX_c += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));
          }else {
            globalX_c += step;
          }


        } else {
  
          if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 0.01*ni;
          

          globalX_c += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = current_Electron_c*0.01;
          }else {
            globalX_c += step;
          }
        }
      } else {
        globalX_c += step;
      }


	    // Draw new line
	   
        
      path_2.datum(data_2_c)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // // Draw new fill area
	    // areaPath_2.datum(data_2_c)
      // .attr('class', 'area')
      // .attr('d', lineArea);

      path.datum(data_c)
      .attr('class', 'smoothline')
      .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX_c - (max - step), globalX_c]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_c - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_c - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data_c.length > 199) {data_c.shift();}
      if (data_2_c.length > 199) {data_2_c.shift();}
    }

    tick();


  


}

reset_electronHoleGraph_tot = () => {

  svgpe_c.selectAll("*").remove();
  svgpe.selectAll("*").remove();
}


// graph2
electronHoleGraph_tot_2 = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 340;


  svgpe_c_2 = d3.selectAll('#pe-viz_c_2')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([1, 4200000000000000]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([1, 4200000000000000])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
  .scale(yScale).ticks(7);



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_c_2.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path_2 = svgpe_c_2.append('path')
              .attr("stroke", '#F1E77D')
              .attr("stroke-width", 2)
              .attr('id', 'area');
          
 var path_2_2 = svgpe_c_2.append('path')
              .attr("stroke", '#7DF194')
              .attr("stroke-width", 2)
              .attr('id', 'area');

  // var path = svgpe_c.append('path')
  //   .attr("stroke", 'white')
  //   .attr("stroke-width", 2)
  //   .attr('id', 'area');

  // var path_2 = svgpe_c.append('path')
  //   .attr("stroke", 'white')
  //   .attr("stroke-width", 2)
  //   .attr('id', 'area');

  

  var areaPath = svgpe_c_2.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","white");
  
  var areaPath_2 = svgpe_c_2.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#white");


  svgpe_c_2.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_c_2.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_c_2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Density (pairs/cm^3)");


  // Handmade legend
  // svgpe_g.append("line")
  // .attr("x1", 140)
  // .attr("y1", 10)
  // .attr("x2", 150)
  // .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  // .style("stroke-width", 1);

  svgpe_c_2.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "#404080").style("stroke", "white")
  .style("stroke-width", 1);

  svgpe_c_2.append("line")
  .attr("x1", 40)
  .attr("y1", 10)
  .attr("x2", 50)
  .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "white")
  .style("stroke-width", 1);




  // svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
  //svgpe_g.append("text").attr("x", 160).attr("y", 10).text("generation rate").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none")  //yellow
  svgpe_c_2.append("text").attr("x", 60).attr("y", 30).text("holes").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none");
  svgpe_c_2.append("text").attr("x", 60).attr("y", 10).text("electrons").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none");

    // svgpe.append('line')
    // .attr('id', 'trendline')
    // .attr('stroke', 'none');


    function tick() {
      // Generate new data

      var point_2_2 = {
		    x: globalX_c_2,
        y: current_Hole_c
        
	    };
	    data_2_c_2.push(point_2_2);
      
      var point_2 = {
		    x: globalX_c_2,
        y: (current_Electron_c)
        
	    };
      data_c_2.push(point_2);

 
  


 
      

  
        // ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
        // generation_Rate_c = 0.01*ni;
        
    
        // globalX_c += step;
        
        // current_Electron_c += generation_Rate_c-recombination_Rate_c; 
        // current_Hole_c += generation_Rate_c-recombination_Rate_c;
        // recombination_Rate_c = current_Electron_c*0.01;
   

if (time_count ==0){
        if (electron_add >0 || hole_add>0) {

          if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
          

          globalX_c_2 += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));
          }else {
            globalX_c_2 += step;
          }


        } else {
  
          if (time_count_graph ==0) {
          ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
          generation_Rate_c = 0.01*ni;
          

          globalX_c_2 += step;
          
          current_Electron_c += generation_Rate_c-recombination_Rate_c; 
          current_Hole_c += generation_Rate_c-recombination_Rate_c;
          recombination_Rate_c = current_Electron_c*0.01;
          }else {
            globalX_c_2 += step;
          }
        }
      } else {
        globalX_c_2 += step;
      }


	    // Draw new line
	   
        
      path_2_2.datum(data_2_c_2)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // // Draw new fill area
	    // areaPath_2.datum(data_2_c)
      // .attr('class', 'area')
      // .attr('d', lineArea);

      path_2.datum(data_c_2)
      .attr('class', 'smoothline')
      .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX_c_2 - (max - step), globalX_c_2]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_c_2 - max) + ')')
        .on('end', tick)
        
      path_2_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_c_2 - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data_c_2.length > 199) {data_c_2.shift();}
      if (data_2_c_2.length > 199) {data_2_c_2.shift();}
    }

    tick();


  


}

reset_electronHoleGraph_tot_2 = () => {

  svgpe_c_2.selectAll("*").remove();
  svgpe_2.selectAll("*").remove();
}



//generation

electronHoleGraph_generation = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 170;


  svgpe_g = d3.selectAll('#pe-viz-generation')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([77000, 33770176900]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([77000, 33770176900])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
    .scale(yScale).ticks(5);



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_g.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe_g.append('path')
    .attr("stroke", '#7DF194')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  var path_2 = svgpe_g.append('path')
    .attr("stroke", '#F1E77D')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  

  var areaPath = svgpe_g.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","#7DF194");
  
  var areaPath_2 = svgpe_g.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#F1E77D");


  svgpe_g.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_g.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Rate (pairs/s*cm^3)");


  // Handmade legend
  // svgpe_g.append("line")
  // .attr("x1", 140)
  // .attr("y1", 10)
  // .attr("x2", 150)
  // .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  // .style("stroke-width", 1);

  svgpe_g.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  .style("stroke-width", 1);

  svgpe_g.append("text").attr("x", 60).attr("y", 30).text("generation").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none");



    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX_g_t,
        y: generation_Rate_s1
        
	    };
	    data_2_g_t.push(point_2);
      
      var point = {
		    x: globalX_g_t,
        y: (recombination_Rate)
        
	    };
      data_g_t.push(point);
      
   
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_s1 = constant_beta*Math.pow(ni,2);
      globalX_g_t += step_g_t;
      // current_Electron += generation_Rate-recombination_Rate; 
      // current_Hole += generation_Rate-recombination_Rate;
  
      
      
      current_Electron += generation_Rate_s1-recombination_Rate; 
      current_Hole += generation_Rate_s1-recombination_Rate;
      recombination_Rate = current_Electron*current_Hole*Math.pow(10,-12)


      // current_Electron = generation_Rate;
      // current_Hole = generation_Rate;
      // recombination_Rate = 10;
      

	    // Draw new line
	   
        
      path_2.datum(data_2_g_t)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // Draw new fill area
	    // areaPath_2.datum(data_2_g_t)
      // .attr('class', 'area')
      // .attr('d', lineArea);

   

	    // Shift the chart left
	    x.domain([globalX_g_t - (max - step), globalX_g_t]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_g_t - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_g_t - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data_g_t.length > 199) {data_g_t.shift();}
      if (data_2_g_t.length > 199) {data_2_g_t.shift();}
    }

    tick();


  


}

electronHoleGraph_generation_tot = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 170;


  svgpe_g_t = d3.selectAll('#pe-viz-generation_tot')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([1000000, 4200000000000]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([1000000 ,4200000000000])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
    .scale(yScale).ticks(6);;



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_g_t.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe_g_t.append('path')
    .attr("stroke", 'white')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  var path_2 = svgpe_g_t.append('path')
    .attr("stroke", 'white')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  

  var areaPath = svgpe_g_t.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","white");
  
  var areaPath_2 = svgpe_g_t.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#white");


  svgpe_g_t.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_g_t.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_g_t.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Density (pairs/cm^3)");
//legend

  svgpe_g_t.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "white").style("stroke", "white")
  .style("stroke-width", 1);



  svgpe_g_t.append("text").attr("x", 60).attr("y", 30).text("e-h pairs").attr("alignment-baseline","middle").style("fill", "white").style("stroke", "none");


    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX_t,
        y: current_Electron_s1
        
	    };
	    data_2_t.push(point_2);
      
 
      
   
      // ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      // generation_Rate = constant_beta*Math.pow(ni,2);
      globalX_t += step_t;
      // current_Electron += generation_Rate-recombination_Rate; 
      // current_Hole += generation_Rate-recombination_Rate;
  
      
      
      // current_Electron += generation_Rate-recombination_Rate; 
      // current_Hole += generation_Rate-recombination_Rate;
      // recombination_Rate = current_Electron*current_Hole*Math.pow(10,-12)


      // current_Electron = generation_Rate;
      // current_Hole = generation_Rate;
      // recombination_Rate = 10;
      

	    // Draw new line
	   
        
      path_2.datum(data_2_t)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // Draw new fill area
	    areaPath_2.datum(data_2_t)
      .attr('class', 'area')
      .attr('d', lineArea);

      // path.datum(data_t)
      // .attr('class', 'smoothline')
      // .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX_t - (max - step), globalX_t]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_t - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)

      if (data_2_t.length > 199) {data_2_t.shift();}
    }

    tick();


  


}

//recombin
electronHoleGraph_recombination = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 170;


  svgpe_r = d3.selectAll('#pe-viz-recombination')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([770000, 3377017690]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([770000, 3377017690])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
    .scale(yScale).ticks(3);;



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_r.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe_r.append('path')
    .attr("stroke", '#7DF194')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  var path_2 = svgpe_r.append('path')
    .attr("stroke", '#F1E77D')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  

  var areaPath = svgpe_r.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","#7DF194");
  
  var areaPath_2 = svgpe_r.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#F1E77D");


  svgpe_r.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_r.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_r.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Rate (pairs/s*cm^3)");


  // // Handmade legend
  // // svgpe_g.append("line")
  // // .attr("x1", 140)
  // // .attr("y1", 10)
  // // .attr("x2", 150)
  // // .attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
  // // .style("stroke-width", 1);

  // svgpe_r.append("line")
  // .attr("x1", 140)
  // .attr("y1", 30)
  // .attr("x2", 150)
  // .attr("y2", 30).style("fill", "7DF194").style("stroke", "7DF194")
  // .style("stroke-width", 1);



  // // svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
  // //svgpe_g.append("text").attr("x", 160).attr("y", 10).text("generation rate").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none")  //yellow
  // svgpe_r.append("text").attr("x", 160).attr("y", 30).text("generation rate").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none");


  svgpe_r.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "#7DF194").style("stroke", "#7DF194")
  .style("stroke-width", 1);

  svgpe_r.append("text").attr("x", 60).attr("y", 30).text("recombination ").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none");



    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX_r,
        y: generation_Rate
        
	    };
	    data_2_r.push(point_2);
      
      var point = {
		    x: globalX_r,
        y: (recombination_Rate_s1)
        
	    };
      data_r.push(point);
      
   
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate = constant_beta*Math.pow(ni,2);
      globalX_r += step_r;
      // current_Electron += generation_Rate-recombination_Rate; 
      // current_Hole += generation_Rate-recombination_Rate;
  
      
      
      current_Electron += generation_Rate-recombination_Rate; 
      current_Hole += generation_Rate-recombination_Rate;
      recombination_Rate = current_Electron*current_Hole*Math.pow(10,-12)


      // current_Electron = generation_Rate;
      // current_Hole = generation_Rate;
      // recombination_Rate = 10;
      

	    // Draw new line
	   
        
      // path_2.datum(data_2_r)
		  //   .attr('class', 'smoothline')
      //   .attr('d', smoothLine);

      // Draw new fill area
	    // areaPath_2.datum(data_2)
      // .attr('class', 'area')
      // .attr('d', lineArea);

      path.datum(data_r)
      .attr('class', 'smoothline')
      .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX_r - (max - step_r), globalX_r]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_r - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_r - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data_r.length > 199) {data_r.shift();}
      if (data_2_r.length > 199) {data_2_r.shift();}
    }

    tick();


  


}

electronHoleGraph_recombination_tot = (p5width, currpos) => {

 
  var duration = 10;
  var max = 200;

  

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 170;


  svgpe_r_t = d3.selectAll('#pe-viz-recombination_tot')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-50,0)')
 
  var x = d3.scaleLinear().domain([0,widthD3]).range([50, widthD3]);
  var y = d3.scaleLog().domain([1000000, 420000000000]).range([400-60, 50]);

  xScale = d3.scaleLinear()
    .domain([0,110])
    .range([50, widthD3])

  

  yScale = d3.scaleLog()
    .domain([1000000, 420000000000])
    .range([heightD3 - 60, 50]);

  // var xAxis = d3.axisBottom()
  //   .scale(xScale);

  
  var yAxis = d3.axisLeft()
    .scale(yScale).ticks(5);



  var xAxis = d3.axisBottom().scale(x).ticks(2).tickFormat(d3.format(".1e"));

  var axisX = svgpe_r_t.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(0, 340)')
    .call(xAxis);
    
  
  var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
  var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
              .y(function(d){ return y(d.y); });
  var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
              



  var path = svgpe_r_t.append('path')
    .attr("stroke", 'white')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  var path_2 = svgpe_r_t.append('path')
    .attr("stroke", 'white')
    .attr("stroke-width", 2)
    .attr('id', 'area');

  

  var areaPath = svgpe_r_t.append('path')
  .attr("fill-opacity","0.1")
  .style("fill","white");
  
  var areaPath_2 = svgpe_r_t.append('path')
  .attr("fill-opacity","0.1")
	.style("fill","#white");


  svgpe_r_t.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_r_t.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Timeline(ns)");

  svgpe_r_t.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -1)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Density (pairs/cm^3)");


  // Handmade legend
  svgpe_r_t.append("line")
  .attr("x1", 40)
  .attr("y1", 30)
  .attr("x2", 50)
  .attr("y2", 30).style("fill", "white").style("stroke", "white")
  .style("stroke-width", 1);



  svgpe_r_t.append("text").attr("x", 60).attr("y", 30).text("e-h pairs").attr("alignment-baseline","middle").style("fill", "white").style("stroke", "none");



    function tick() {
      // Generate new data

      var point_2 = {
		    x: globalX_r_t,
        y: current_Electron_s1
        
	    };
	    data_2_r_t.push(point_2);
      
      var point = {
		    x: globalX_r_t,
        y: (recombination_Rate)
        
	    };
      data_r_t.push(point);
      
   
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate = constant_beta*Math.pow(ni,2);
      globalX_r_t += step_r_t;
      // current_Electron += generation_Rate-recombination_Rate; 
      // current_Hole += generation_Rate-recombination_Rate;
  
      
      
      current_Electron += generation_Rate-recombination_Rate; 
      current_Hole += generation_Rate-recombination_Rate;
      recombination_Rate = current_Electron*current_Hole*Math.pow(10,-12)


      // current_Electron = generation_Rate;
      // current_Hole = generation_Rate;
      // recombination_Rate = 10;
      

	    // Draw new line
	   
        
      path_2.datum(data_2_r_t)
		    .attr('class', 'smoothline')
        .attr('d', smoothLine);

      // Draw new fill area
	    areaPath_2.datum(data_2_r_t)
      .attr('class', 'area')
      .attr('d', lineArea);

      // path.datum(data_r_t)
      // .attr('class', 'smoothline')
      // .attr('d', smoothLine);

   

	    // Shift the chart left
	    x.domain([globalX_r_t - (max - step_r_t), globalX_r_t]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_r_t - max) + ')')
        .on('end', tick)
        
      path_2.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX_r_t - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
      if (data_r_t.length > 199) {data_r_t.shift();}
      if (data_2_r_t.length > 199) {data_2_r_t.shift();}
    }

    tick();


  


}

//constant
electronHoleGraph_s2= (p5width, currpos) => {

  var globalX = 0;
  var duration = 10;
  var max = 500;
  var step = 10;
  var data = [];

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 165;


  svgpe_s2 = d3.selectAll('#scene2-eh')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-60,0)')
 

  xScale = d3.scaleLinear()
    .domain([0,56])
    .range([50, widthD3])
    

  yScale = d3.scaleLinear()
    .domain([0 ,110])
    .range([heightD3 - 60, 50]);

  let xAxis = d3.axisBottom()
    .scale(xScale).ticks(10).tickValues([]);

  
  let yAxis = d3.axisLeft()
    .scale(yScale).ticks(10).tickValues([]);
    

  svgpe_s2.append('path')
    .attr('id', 'area');

  svgpe_s2.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(0)})`)
    .attr('class', 'axis');

  svgpe_s2.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_s2.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Time(ns)");

  svgpe_s2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 5)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Rate (pairs/s*cm^3)");

    svgpe_s2.append('line')
    .attr('id', 'trendline')
    .attr('stroke', 'none');

    svgpe_s2.append('path')
    .datum(dataset_generation)
    .attr('class', 'line')
    .attr("fill", "none")
    .attr("stroke", '#F1E77D')
    .attr("stroke-width", 1)
    .attr('d', d3.line()
      .x(function (d) {
        return xScale(d.time)
      })
      .y(function (d) {
        return yScale(d.g)
      })
    );
    
    svgpe_s2.append('path')
    .datum(dataset_generation)
    .attr('class', 'line')
    .attr("fill", "none")
    .attr("stroke", '#7DF194')
    .attr("stroke-width", 1)
    .attr('d', d3.line()
      .x(function (d) {
        return xScale(d.time)
      })
      .y(function (d) {
        return yScale(d.num)
      })
    );

    // Handmade legend
svgpe_s2.append("line")
.attr("x1", 40)
.attr("y1", 10)
.attr("x2", 50)
.attr("y2", 10).style("fill", "#FFF7AE").style("stroke", "#FFF7AE")
.style("stroke-width", 1);

svgpe_s2.append("line")
.attr("x1", 40)
.attr("y1", 30)
.attr("x2", 50)
.attr("y2", 30).style("fill", "#7DF194").style("stroke", "#7DF194")
.style("stroke-width", 1);

// svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
svgpe_s2.append("text").attr("x", 60).attr("y", 10).text("generation").attr("alignment-baseline","middle").style("fill", "#FFF7AE").style("stroke", "none").attr("fill-opacity", 0.9);  //yellow
svgpe_s2.append("text").attr("x", 60).attr("y", 30).text("recombination ").attr("alignment-baseline","middle").style("fill", "#7DF194").style("stroke", "none").attr("fill-opacity", 0.9);



   
  /* Add 'curtain' rectangle to hide entire graph */
  var curtain = svgpe_s2.append('rect')
    .attr('x', -1 * widthD3)
    .attr('y', -1 * heightD3+60)
    .attr('height', heightD3-100)
    .attr('width', widthD3-53)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style("stroke", "none")
    .style('fill', '#121212');

  // /* Create a shared transition for anything we're animating */
  // var t = svgpe_s2.transition()
  //   .delay(750)
  //   .duration(30000)
  //   .ease(d3.easeLinear)
  //   .on('end', function() {
  //     d3.select('line.guide')
  //       .transition()
  //       .style('opacity', 0)
  //       .remove()
  //   });
  
  // t.select('rect.curtain')
  //   .attr('width', 0);
 


}

electronHoleGraph_s2_reset = () => {
  var t = svgpe_s2.transition()
  .delay(0)
  .duration(100)
  .ease(d3.easeLinear)
  .on('end', function() {
    d3.select('line.guide')
      .transition()
      .style('opacity', 0)
      .remove()
  });

t.select('rect.curtain')
  .attr('width', widthD3-53);


}

electronHoleGraph_s2_update = () => {
  /* Create a shared transition for anything we're animating */
  var t = svgpe_s2.transition()
    .delay(750)
    .duration(30000)
    .ease(d3.easeLinear)
    .on('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });
  
  t.select('rect.curtain')
    .attr('width', 0);

}

electronHoleGraph_s2_pairs= (p5width, currpos) => {

  var globalX = 0;
  var duration = 10;
  var max = 500;
  var step = 10;
  var data = [];

  let dataset = [];
  let maxIndex = 0;
  let widthdd = 100;

  heightD3 = 400,
  widthD3 = 165;


  svgpe_s2_pairs = d3.selectAll('#scene2-eh-pairs')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .style("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 0.8)
    .attr('transform', 'translate(-60,0)')
 

  xScale = d3.scaleLinear()
    .domain([0,56])
    .range([50, widthD3])
    

  yScale = d3.scaleLinear()
    .domain([0 ,110])
    .range([heightD3 - 60, 50]);

  let xAxis = d3.axisBottom()
    .scale(xScale).tickValues([]);

  
  let yAxis = d3.axisLeft()
    .scale(yScale).tickValues([]);
    

  svgpe_s2_pairs.append('path')
    .attr('id', 'area');

  svgpe_s2_pairs.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(0)})`)
    .attr('class', 'axis');

  svgpe_s2_pairs.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_s2_pairs.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Time(ns)");

  svgpe_s2_pairs.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 5)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Density (pairs/cm^3)");

    svgpe_s2_pairs.append('line')
    .attr('id', 'trendline')
    .attr('stroke', 'none');

    svgpe_s2_pairs.append('path')
    .datum(dataset_generation)
    .attr('class', 'line')
    .attr("fill", "none")
    .attr("stroke", 'whie')
    .attr("stroke-width", 1)
    .attr('d', d3.line()
      .x(function (d) {
        return xScale(d.time)
      })
      .y(function (d) {
        return yScale(d.pairs)
      })
    );
    
  

    // Handmade legend
svgpe_s2_pairs.append("line")
.attr("x1", 40)
.attr("y1", 10)
.attr("x2", 50)
.attr("y2", 10).style("fill", "white").style("stroke", "white")
.style("stroke-width", 1);


// svgpe.append("line").attr("cx",200).attr("cy",30).attr("r", 6).style("fill", "#404080").attr('stroke', 'none');
svgpe_s2_pairs.append("text").attr("x",60).attr("y", 10).text("e-h pairs").attr("alignment-baseline","middle").style("fill", "white").style("stroke", "none").attr("fill-opacity", 0.9);  //yellow
// svgpe_s2_pairs.append("text").attr("x", 170).attr("y", 30).text("holes").attr("alignment-baseline","middle").style("fill", "white").style("stroke", "none").attr("fill-opacity", 0.9);



    /* Add 'curtain' rectangle to hide entire graph */
  var curtain = svgpe_s2_pairs.append('rect')
  .attr('x', -1 * widthD3)
  .attr('y', -1 * heightD3+60)
  .attr('height', heightD3-100)
  .attr('width', widthD3-53)
  .attr('class', 'curtain')
  .attr('transform', 'rotate(180)')
  .style("stroke", "none")
  .style('fill', '#121212');

// /* Create a shared transition for anything we're animating */
// var t = svgpe_s2_pairs.transition()
//   .delay(750)
//   .duration(30000)
//   .ease(d3.easeLinear)
//   .on('end', function() {
//     d3.select('line.guide')
//       .transition()
//       .style('opacity', 0)
//       .remove()
//   });

// t.select('rect.curtain')
//   .attr('width', 0);


 


}

electronHoleGraph_s2_pairs_reset = () => {
  var t = svgpe_s2_pairs.transition()
  .delay(0)
  .duration(100)
  .ease(d3.easeLinear)
  .on('end', function() {
    d3.select('line.guide')
      .transition()
      .style('opacity', 0)
      .remove()
  });

t.select('rect.curtain')
  .attr('width', widthD3-53);


}

electronHoleGraph_s2_pairs_update = () => {
  /* Create a shared transition for anything we're animating */
  var t = svgpe_s2_pairs.transition()
    .delay(750)
    .duration(30000)
    .ease(d3.easeLinear)
    .on('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });
  
  t.select('rect.curtain')
    .attr('width', 0);

}



//////
updatePotentialEnergyGraph = () => {

  svgpe.selectAll('.pe-circle1')
  .data(momentumData1)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 5)
  .attr('fill', '#DC267F');

  // var lines = svg.attr("class", "line")
  //           .selectAll("line").data(momentumData)
  //           .enter().append("line")
  //           .style("stroke", "gray") // <<<<< Add a color
  //           .attr("x1", function(d) { return 50 })
  //           .attr("y1", function(d) { return 50 })
  //           .attr("x2", function(d) { return 100 })
  //           .attr("y2", function(d) {  return 100 })

  svgpe.selectAll('.pe-circle2')
  .data(momentumData2)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 5)
  .attr('fill', '#FE6100');

  svgpe.selectAll('.pe-circle3')
  .data(momentumData3)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 5)
  .attr('fill', '#785EF0');

 

//#785EF0

}


resetPotentialEnergyGraph = () => {
  momentumData = [];
  kineticData = [];
  momentumData1 = [];
  momentumData2 = [];
  momentumData3 = [];
  svgpe.selectAll(".pe-circle").remove();
}

generation_eq = () => {
  let dataset_r = [];
  let dataset_g = [];

  for (let i = 0; i < 400; i+=1) {
    dataset_g[i] = {
      x: i,
      y: Math.pow(10,-37)*Math.pow(9.15*Math.pow(10,19)*(Math.pow(i/300,2))*(Math.exp(-0.59/(i))),2)/100
    };
  }

  for (let i = 0; i < 400; i+=1) {
    dataset_r[i] = {
      x: i,
      y: Math.pow(10,-37)*Math.pow(9.15*Math.pow(10,19)*(Math.pow(i/300,2))*(Math.exp(-0.59/(i))),2)/200
    };
  }

  svgpe.append('path')
  .datum(dataset_g)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", '#7DF194')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  svgpe.append('path')
  .datum(dataset_r)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", '#F1E77D')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

}

path_change = () => {
  svgpe.append("rect")
  .attr('x', widthD3 - 50)
  .attr('y', -1 * heightD3 + 60)
  .attr('height', heightD3)
  .attr('width', widthD3)
  .attr('class', 'curtain')
  .attr('transform', 'rotate(180)')
  .style('fill', '#ffffff')
  .raise()
  .transition()
  .duration(5000)
  .attr('x', -1 * widthD3 - 50-100)
 
}

//scene 2
potentialEnergyGraph_2 = (p5width, currpos) => {

  let dataset = [];
  let maxIndex = 0;

  heightD3 = 400,
  widthD3 = 400;

  svgpe_2 = d3.selectAll('#pe-viz-2')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  xScale = d3.scaleLinear()
    .domain([0,10])
    .range([50, widthD3]);

  yScale = d3.scaleLinear()
    .domain([0 ,50])
    .range([heightD3 - 60, 50]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svgpe_2.append('path')
    .attr('id', 'area');

  svgpe_2.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(0)})`)
    .attr('class', 'axis');

  svgpe_2.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');

  svgpe_2.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Momentum");

  svgpe_2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Kinetic Energy");

  svgpe_2.append('line')
    .attr('id', 'trendline')
    .attr('stroke', 'none');

    svgpe_2.append('path')
    .datum(momentumData3)
    .attr('class', 'line')
    .attr("fill", "none")
    .attr("stroke", 'white')
    .attr("stroke-width", 2)
    .attr('d', d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );
  

}

updateTrendline = () => {
  let dataset_t1 = [];
  let dataset_t2 = [];
  let dataset_t3 = [];

  // console.log("ssssssss");

  for (let i = 0; i < 12; i+=1) {
    dataset_t1[i] = {
      x: i,
      y: (((bug_pe1.mass*5)*(Math.pow(i/(bug_pe1.mass*5), 2)))/2)
    };
  }

  for (let i = 0; i < 12; i+=1) {
    dataset_t2[i] = {
      x: i,
      y: (((bug_pe2.mass*5)*(Math.pow(i/(bug_pe2.mass*5), 2)))/2)
    };
  }

  for (let i = 0; i < 12; i+=1) {
    dataset_t3[i] = {
      x: i,
      y: (((bug_pe3.mass*5)*(Math.pow(i/(bug_pe3.mass*5), 2)))/2)
    };
  }
  svgpe_2 = d3.selectAll('#pe-viz-2')
  .attr('height', heightD3)
  .attr('width', widthD3)
  .attr('transform', 'translate(-60,0)');

  

  svgpe_2.selectAll('.pe-circle1t')
  .data(dataset_t1)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', '#DC267F');


  svgpe_2.selectAll('.pe-circle2t')
  .data(dataset_t2)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', '#FE6100');

  svgpe_2.selectAll('.pe-circle3t')
  .data(dataset_t3)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', '#785EF0');




  svgpe_2.append('path')
  .datum(dataset_t1)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", '#DC267F')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  svgpe_2.append('path')
  .datum(dataset_t2)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", '#FE6100')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  svgpe_2.append('path')
  .datum(dataset_t3)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", '#785EF0')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );




//#785EF0

}

//scene 3
potentialEnergyGraph2 = (p5width, currpos) => {

  let dataset = [];
  let maxIndex = 0;

  heightD3 = 400,
  widthD3 = 400;

  svgpe2 = d3.selectAll('#ke_p-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  xScale = d3.scaleLinear()
    .domain([-1000, 850])
    .range([0, widthD3 - 30]);

  yScale = d3.scaleLinear()
    .domain([0 ,10000])
    .range([heightD3 - 60, 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svgpe2.append('path')
    .attr('id', 'area');

  svgpe2.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(0)})`)
    .attr('class', 'axis');

  svgpe2.append('g')
    .call(yAxis)
    .attr("transform", "translate(" + (widthD3 / 2) + ",0)")
    .attr('class', 'axis');

  svgpe2.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Momentum");

  svgpe2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Kinetic Energy");

   
  



}

updatePotentialEnergyGraph2 = (mass) => {


  let dataset = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=1) {
    dataset[i] = {
      x: i,
      y: kEn(i, mass)
    };
    // negatives[i] = {
    //   x: -i,
    //   y: kEn(i, mass)
    // };
    // momentumData2.push(dataset[i].x);
    // kineticData2.push(dataset[i].y);
    if (dataset[i].y > dataset[maxIndex].y) {
      maxIndex = i;
    }
  }

  // dataset = dataset + negatives;



  svgpe2.append('path')
  .datum(dataset)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", 'white')
  .attr("stroke-width", 2)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  svgpe2.append('path')
  .datum(dataset)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", 'white')
  .attr("stroke-width", 2)
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x *-1)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );


  
}

resetPotentialEnergyGraph2 = () => {
  momentumData = [];
  kineticData = [];

  svgpe2.selectAll(".pe-circle").remove();
  svgpe2.selectAll(".pe-circle-negative").remove();
  svgpe2.selectAll(".line").remove();

}

 kEn= (x, mass) => {
  return 0.5 * (Math.pow(x, 2)/mass);
}




drawGraph = (radius) => {
  if (svg != undefined) {
    svg.selectAll('.dot')
      .attr('fill', d => {
        if (d.x < radius) {
          return '#FFF7AE';
        } else {
          return 'none';
        }
      })
      .attr('opacity', d => {
        if (sceneCount == 3 || sceneCount == 4) {
          return '0.5';
        } else {
          return '1.0';
        }
      });
  }     
}

showSelection = (d,fn) => {
  if (svg != undefined) {
    svg.select('.selection-line')
      .attr('x1', xScale(d))
      .attr('y1', yScale(0))
      .attr('x2', xScale(d))
      .attr('y2', yScale(fn(d)))
  }
}


//periodic potential
potentialEnergyGraph3 = (p5width, currpos) => {

  let dataset = [];
  let maxIndex = 0;

  heightD4 = 600,
  widthD4 = 400;

  svgpe3 = d3.selectAll('#pe2-viz')
    .attr('height', heightD4)
    .attr('width', widthD4)
    .attr('transform', 'translate(-80,30)');

  //   xScale = d3.scaleLinear()
  //   .domain([-80, p5width / 15])
  //   .range([0, widthD3 - 30]);

  // yScale = d3.scaleLinear()
  //   .domain([0 ,p5width / 3])
  //   .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([0, 500])
    .range([30,widthD4]);

  yScale = d3.scaleLinear()
    .domain([-0.4,0])
    .range([600, 0]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svgpe3.append('path')
    .attr('id', 'area');

    svgpe3.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(0)})`)
    .attr('class', 'axis');

  svgpe3.append('g')
    .call(yAxis)
    .attr('transform', `translate(${xScale(0)},0)`)
    .attr('class', 'axis');
  svgpe3.append("text")
    .attr("transform",
      "translate(" + (widthD4 / 2) + " ," +
      (heightD4 - 580) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Position");

  svgpe3.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (heightD4 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Potential Energy");

    svgpe3.append('line')
    .attr('id', 'selection_mouse')
    .attr('stroke', 'none');

    
}

periodicG = (x,distance_particle) => {
  return 2-(3*distance_particle*cos(x));
}


//periodic potential scene 5
updatePeriodicGraph = (distance_particle) => {


  let dataset = [];
  let dataset2 = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 2000; i+=1) {
    dataset[i] = {
      x: i,
      y: -1/Math.abs(i-r)-1/Math.abs(i-2*r)-1/Math.abs(i-3*r)-1/Math.abs(i-4*r)-1/Math.abs(i-5*r)-1/Math.abs(i-6*r)
      -1/Math.abs(i-7*r)-1/Math.abs(i-8*r)-1/Math.abs(i-9*r)-1/Math.abs(i-10*r)-1/Math.abs(i-11*r)-1/Math.abs(i-12*r)-1/Math.abs(i-13*r)
      -1/Math.abs(i-14*r)-1/Math.abs(i-15*r)-1/Math.abs(i-16*r)
    };
   
  }

  points = [
    [r+1, -10],
    [r+1, 0]
  ];

  for (let i = 0; i < 2000; i+=1) {
    if (dataset[i].y<-0.5) {
      dataset2.push({x:i, y:-1});
    } else {
      dataset2.push({x:i, y:dataset[i].y});
    }
  }

  // console.log(dataset2);
  // dataset = dataset + negatives;
  

  svgpe3
  .append('path')
  .datum(dataset2)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", 'white')
  .attr("stroke-width", 1)
  .attr('d', d3.line()
  .defined(function(d) { return d; })
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  

}

//scene 4 mouse
updateMouseGraph = (distance_particle) => {
  svgpe3.select('#selection_mouse')
  .attr('x1', xScale(mouse_x))
  .attr('y1', yScale(-10))
  .attr('x2', xScale(mouse_x))
  .attr('y2', yScale(0))
  .style('stroke', 'rgb(254,246,182)')
  .style('stroke-width', '3px')
  .attr("stroke-opacity", 0.2);
}

resetPeriodicGraph = () => {

  svgpe3.selectAll("*").remove();
  potentialEnergyGraph3();
  // svgpe3.select(".line1").remove();

}

clearMouseGraph = (distance_particle) => { 
  svgpe3.select('#selection_mouse').remove();
}


//scene 6

effectiveGraph = (p5width, currpos) => {

  let dataset = [];
  let maxIndex = 0;
  // for (let i = 0; i < 1000; i+=0.5) {
  //   dataset[i] = {
  //     x: i,
  //     y: kEn(i, mass)
  //   };
  //   if (dataset[i].y > dataset[maxIndex].y) {
  //     maxIndex = i;
  //   }
  // }

  heightD3 = 400,
  widthD3 = 400;

  svgpe4 = d3.selectAll('#effective')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  xScale = d3.scaleLinear()
    .domain([-1000, 850])
    .range([0, widthD3 - 30]);

  yScale = d3.scaleLinear()
    .domain([-1 ,2])
    .range([heightD3 - 60, 0]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svgpe4.append('path')
    .attr('id', 'area');

  svgpe4.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(-1)})`)
    .attr('class', 'axis');

  svgpe4.append('g')
    .call(yAxis)
    .attr("transform", "translate(" + (widthD3 / 2) + ",0)")
    .attr('class', 'axis');

  svgpe4.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Momentum");

  svgpe4.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Kinetic Energy");

  



}

update_effectiveGraph = (mass) => {


  let dataset_ef = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=1) {
    dataset_ef[i] = {
      x: i,
      y: -cos((distance*0.00000794+0.00245214)*i)
    };
    // negatives[i] = {
    //   x: -i,
    //   y: kEn(i, mass)
    // };
    // momentumData2.push(dataset[i].x);
    // kineticData2.push(dataset[i].y);
  
  }

  // dataset = dataset + negatives;
  
  svgpe4.selectAll('.pe-circle-ef')
  .data(dataset_ef)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle-e')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'rgb(134,204,135)');

  svgpe4.selectAll('.pe-circle-negative-ef')
  .data(dataset_ef)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle-negative-e')
  .attr('cx', d => xScale(d.x * -1))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'rgb(134,204,135)');

  
}
kEn_e = (x_e, effective_mass) => {
  // return 0.5 * (Math.pow(x_e, 2)/mass_e);
  return 0.0001* Math.pow(x_e, 2)/((-21/154)*r_electron+26.6);
}


update_effectiveMass = () => {


  let dataset_e = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=1) {
    dataset_e[i] = {
      x: i,
      y: kEn_e(i, effective_mass)-1
    };
   
    // console.log(dataset_e);
  
  }

  // dataset = dataset + negatives;
  
  svgpe4.selectAll('.pe-circle-4')
  .data(dataset_e)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'white');

  svgpe4.selectAll('.pe-circle-negative-4')
  .data(dataset_e)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle-negative-4')
  .attr('cx', d => xScale(d.x * -1))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'white');



  
}

reset_effectiveGraph= () => { 
  svgpe4.selectAll('*').remove();
}

//scene 7
effectiveGraph2 = (p5width, currpos) => {

  let dataset = [];
  let maxIndex = 0;
  // for (let i = 0; i < 1000; i+=0.5) {
  //   dataset[i] = {
  //     x: i,
  //     y: kEn(i, mass)
  //   };
  //   if (dataset[i].y > dataset[maxIndex].y) {
  //     maxIndex = i;
  //   }
  // }

  heightD3 = 400,
  widthD3 = 400;

  svgpe5 = d3.selectAll('#effective2')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  xScale = d3.scaleLinear()
    .domain([-1000, 850])
    .range([0, widthD3 - 30]);

  yScale = d3.scaleLinear()
    .domain([-1 ,2])
    .range([heightD3 - 60, 0]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svgpe5.append('path')
    .attr('id', 'area');

  svgpe5.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${yScale(-1)})`)
    .attr('class', 'axis');

  svgpe5.append('g')
    .call(yAxis)
    .attr("transform", "translate(" + (widthD3 / 2) + ",0)")
    .attr('class', 'axis');

  svgpe5.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Momentum");

  svgpe5.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Kinetic Energy");

  



}

update_effectiveGraph2 = (mass) => {


  let dataset_ef = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=1) {
    dataset_ef[i] = {
      x: i,
      y: -cos((distance*0.00000794+0.00245214)*i)
    };
    // negatives[i] = {
    //   x: -i,
    //   y: kEn(i, mass)
    // };
    // momentumData2.push(dataset[i].x);
    // kineticData2.push(dataset[i].y);
  
  }

  // dataset = dataset + negatives;
  
  svgpe5.selectAll('.pe-circle-ef')
  .data(dataset_ef)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle-e')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'rgb(134,204,135)');

  svgpe5.selectAll('.pe-circle-negative-ef')
  .data(dataset_ef)
  .enter()
  .append('circle')
  .attr('class', 'pe-circle-negative-e')
  .attr('cx', d => xScale(d.x * -1))
  .attr('cy', d => yScale(d.y))
  .attr('r', 1)
  .attr('fill', 'rgb(134,204,135)');

  
}
kEn_e = (x_e, effective_mass) => {
  // return 0.5 * (Math.pow(x_e, 2)/mass_e);
  return 0.0001* Math.pow(x_e, 2)/((-21/154)*mass_slider+26.6);
}

update_effectiveMass2 = () => {


  let dataset_e = [];
  // let negatives = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=1) {
    dataset_e[i] = {
      x: i,
      y: kEn_e(i, effective_mass)-1
    };
   
    // console.log(dataset_e);
  
  }

  // dataset = dataset + negatives;
  
  // svgpe5.selectAll('.pe-circle-4')
  // .data(dataset_e)
  // .enter()
  // .append('circle')
  // .attr('class', 'pe-circle')
  // .attr('cx', d => xScale(d.x))
  // .attr('cy', d => yScale(d.y))
  // .attr('r', 1)
  // .attr('fill', 'rgb(254,246,182)');

  // svgpe5.selectAll('.pe-circle-4')
  // .data(dataset_e)
  // .enter()
  // .append('circle')
  // .attr('class', 'pe-circle')
  // .attr('cx', d => xScale(d.x*-1))
  // .attr('cy', d => yScale(d.y))
  // .attr('r', 1)
  // .attr('fill', 'rgb(254,246,182)');

  svgpe5.append('path')
  .datum(dataset_e)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", 'rgb(254,246,182)')
  .attr("stroke-width", 1)
  .style("stroke-dasharray", ("5, 5"))
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );

  svgpe5.append('path')
  .datum(dataset_e)
  .attr('class', 'line')
  .attr("fill", "none")
  .attr("stroke", 'rgb(254,246,182)')
  .attr("stroke-width", 1)
  .style("stroke-dasharray", ("5, 5"))
  .attr('d', d3.line()
    .x(function (d) {
      return xScale(d.x*-1)
    })
    .y(function (d) {
      return yScale(d.y)
    })
  );


  
}

reset_effectiveGraph2= () => { 
  svgpe5.selectAll('*').remove();
}