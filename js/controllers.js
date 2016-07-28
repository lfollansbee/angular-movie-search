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
});

app.controller("SearchController", function ($scope, $http, dataTransfer, $stateParams) {
  $scope.results = {};
  $scope.results.params = $stateParams;
  $scope.results.movieResults = [];

  $scope.results.search = function(params) {
    $http.get('http://www.omdbapi.com/?s=' + params.id)
    .then(function(data) {
      console.log(data);
      for(var i = 0; i < data.data.Search.length; i++){
        $scope.results.movieResults.push(data.data.Search[i]);
      }
      console.log($scope.results.movieResults);
    })
  }

  $scope.results.search($scope.results.params);
})
