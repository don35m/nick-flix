nickFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, MoviesFactory, UtilitiesFactory) {
  $scope.reviews = MoviesFactory.reviews;
  $scope.MoviesFactory = MoviesFactory;

  $scope.userReview = UtilitiesFactory.findById(MoviesFactory.reviews, $stateParams.reviewId);
});
