define(function(require) {
  var d3 = require('d3');

  var data = [4, 8, 15, 16, 23, 42, 56];

  var width = 420,
      barHeight = 20;

  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  var chart = d3.select('.chart')
    .attr({
      'width': width,
      'height': barHeight * data.length,
  });

  var bar = chart.selectAll('g')
    .data(data)
    .enter().append('g')
    .attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });

  bar.append('rect')
    .attr({
      'width': x,
      'height': barHeight - 1,
    });

  bar.append('text')
    .attr({
      'x': function(d) { return x(d) - 3; },
      'y': barHeight / 2,
      'dy': '.35em',
    })
    .text(function(d) { return d; });
});