nickFlix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [
    {reviewTitle: "The Outsiders",
     reviewBody: "One of the best movies ever!!",
     reviewId: 1
    },
    {reviewTitle: "Young Guns",
     reviewBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      reviewId: factory.reviews.length + 1
    });
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };

  return factory;
});
