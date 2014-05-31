define(function(require) {
	var L = require('leaflet');

  var map = L.map('map').setView([39.7708, -105.004], 11);
	
  L.tileLayer('http://{s}.tile.cloudmade.com/98b0d586fa8e43d7914503c63be9940b/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);
  
	L.marker([39.7708, -105.004]).addTo(map);
  
	L.circle([39.7708, -105.004], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);
  
	L.polygon([
    [39.7709, -105.08],
    [39.7703, -105.06],
    [39.7003, -105.047]
  ]).addTo(map);									
});
