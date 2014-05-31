define(function(require) {
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Model_ClimateBasin = require('components/averageClimateBasin/model');
	
	var View_ClimateBasin = Backbone.View.extend({
		model: Model_ClimateBasin,
		template: _.template($('#climate_basin').text()),
		render: function() {
			this.$el.html(
				this.template(
					this.model.toJSON()
				)
			);
			console.warn( this.model.attributes );
			return this;
		},
	});
	
	return View_ClimateBasin;
});
