app.factory('dataTransfer', function(){
    var savedData = [];
    return {
      setData: function(data) {
        savedData.push(data);
      },
      getData: function() {
        return savedData;
      }
    }
    // console.log(savedData);
});

app.controller("SearchController", function ($scope, $http, dataTransfer, $stateParams) {
  $scope.results = {};
  $scope.results.params = $stateParams;
  $scope.results.movieResults = [];

  $scope.results.search = function(params) {
    $http.get('http://www.omdbapi.com/?s=' + params.id)
    .then(function(data) {
      for(var i = 0; i < data.data.Search.length; i++){
        $scope.results.movieResults.push(data.data.Search[i]);
      }
      console.log($scope.results.movieResults);
    })
  }
  $scope.results.search($scope.results.params)
})

app.controller("ShowController", function ($scope, $http, dataTransfer, $stateParams) {
  $scope.movie = {}
  $http.get( 'https://www.omdbapi.com/?i=' + $stateParams.movieId )
  .then(function(specificMovieData) {
      $scope.movie = specificMovieData.data;
      console.log($scope.movie);
    });
})
