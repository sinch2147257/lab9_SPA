angular
  .module("spa", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/offer", {
        templateUrl: "offer.html",
        controller: "offerCntrl",
      })
      .when("/history", {
        templateUrl: "history.html",
        controller: "historyCntrl",
      })
      .when("/menuInd", {
        templateUrl: "menuInd.html",
        controller: "menuCntrl",
      });
  })
  .controller("offerCntrl", function ($scope) {
    $scope.message = "Today's Offers";
  })
  
  .controller("menuCntrl", function ($scope, $http) {
    $scope.message = "Today's Menu List ";
    $http
      .get("https://sinch2147257.github.io/lab9_SPA/menu.json")
      .then(function (response) {
        $scope.meetingsData = response.data.meetings;
      });
    $scope.orderMeetingBy = function (x) {
      $scope.myOrderBy = x;
    };
  })
  .controller("historyCntrl", function ($scope, $http) {
    $scope.message = "History Info";
    $http
      .get("https://sinch2147257.github.io/lab9_SPA/data.json")
      .then(function (response) {
        $scope.meetingsData = response.data.meetings;
      });
    $scope.historyBy = function (x) {
      $scope.myOrderBy = x;
    };
  })
  .filter("upperCase", function () {
    return function (input) {
      return titleCase(input);
    };
  });

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
