require.config({
  baseUrl: "..",
  paths: {
    jquery: "/bower_components/jquery/dist/jquery",
    backbone: "/bower_components/backbone/backbone",
    underscore: "/bower_components/lodash/dist/lodash",
    layoutmanager: "/bower_components/layoutmanager/backbone.layoutmanager",
    d3: "/bower_components/d3/d3.min",
    // leaflet: "http://cdn.leafletjs.com/leaflet-0.7.2/leaflet",
		components: "src/modules/components",
    miso_deps: "/bower_components/miso.dataset/dist/miso.ds.deps.min.0.4.1",
    miso: "/bower_components/miso.dataset/dist/miso.ds.min.0.4.1",
  },
  shim: {
    backbone: {
      exports: "Backbone",
      deps: ["underscore", "jquery"],
    },
    underscore: {
      exports: "_"
    },
  },
  deps: ["src/main"],
});
