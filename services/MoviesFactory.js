nickFlix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [
    {reviewTitle: "The Outsiders",
     reviewBody: "One of the best movies ever!!",
     reviewId: 1
    },
    {reviewTitle: "Young Guns",
     reviewBody: "One of the best movies ever!!",
     reviewId: 2
    },
    {reviewTitle: "Breaking Bad",
     reviewBody: "One of the best movies ever!!",
     reviewId: 3
    },
  ];



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
