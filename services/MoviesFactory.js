nickFlix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [];



  factory.addReview = function() {
    factory.reviews.push({
      reviewTitle: factory.reviewTitle,
      reviewBody: factory.reviewBody,
      id: factory.reviews.length + 1
    });
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };

  return factory;
});
