nickFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, MoviesFactory) {
  $scope.reviews = MoviesFactory.reviews;
  $scope.MoviesFactory = MoviesFactory;
});
