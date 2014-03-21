require.config({
  baseUrl: "..",
  paths: {
    jquery: "/bower_components/jquery/dist/jquery",
    backbone: "/bower_components/backbone/backbone",
    underscore: "/bower_components/lodash/dist/lodash",
    layoutmanager: "/bower_components/layoutmanager/backbone.layoutmanager",
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
