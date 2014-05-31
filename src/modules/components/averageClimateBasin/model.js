define(function(require) {

	var Backbone = require('backbone');
	
	var Model_ClimateBasin = Backbone.Model.extend({
		urlRoot: function() {
			// return 'http://climatedataapi.worldbank.org/climateweb/rest/v1/basin/cru/tas/year/364';
      return 'http://0.0.0.0:8001/';
		},
	});
	
	return Model_ClimateBasin;
});
