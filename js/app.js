angular
  .module('MovieSearch', ['ui.router'])
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'ResultsController',
    templateUrl: '/templates/home.html'
  }).state('home.list-movies', {
    url: 'movies/:keywords?page',
    controller: 'MoviesController',
    templateUrl: '/templates/movies.html'
  })
}
