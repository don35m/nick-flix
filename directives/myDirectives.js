nickFlix.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

nickFlix.directive("toggleBodyClass", function($document) {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      $document.find("body").toggleClass(attrs.toggleBodyClass);
    });
  }
});
nickFlix.directive("changeClass", function() {
  return function (scope, element) {
    element.bind("click", function() {
      element.toggleClass("bg-danger");
    });
  }
});
