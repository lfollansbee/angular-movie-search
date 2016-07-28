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
      url: "/show/:movieId",
      templateUrl: "/templates/movie.html",
      controller: "ShowController"
    })
})
