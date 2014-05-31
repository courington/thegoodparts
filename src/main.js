define(function(require) {
  // var Model_ClimateBasin = require('components/averageClimateBasin/model');
  // var View_ClimateBasin = require('components/averageClimateBasin/view-list');
  // var map = require('components/averageClimateBasin/map');
  // var View_Chart = require('components/averageClimateBasin/view-chart');

  var Miso = require("miso");

  // var m_climateBasin = new Model_ClimateBasin({
  //   id: 1,
  // });
  
  // var v_climateBasin = new View_ClimateBasin({
  //   model: m_climateBasin,
  // });
  
  // v_climateBasin.$el.appendTo('body');
  
  // m_climateBasin.fetch().always(function() {
  //   v_climateBasin.render();
  // });

  var data = [
    { color : "red",   r : 255, g : 0,   b : 0   },
    { color : "blue",  r : 0,   g : 0,   b : 255 },
    { color : "green", r : 0,   g : 255, b : 0   }
  ];

  var ds = new Miso.Dataset({
    data : data,
  });

  console.log(ds.keys());

  // ds.fetch({ 
  //   success : function() {
  //     console.log("Dataset Ready. Columns: " + this.columnNames());
  //     console.log("There are " + this.length + " rows");
  //     console.log("Available Colors: " + this.column("color").data);
  //   }
  // });

});
