var app = angular.module("movieApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("search", {
      url: "/results/:id",
      templateUrl: "/templates/results.html",
      controller: "SearchController"
    })
    .state("show", {
      url: "/show/:id",
      templateUrl: "/templates/movies.html",
      controller: "ShowController"
    })
})
