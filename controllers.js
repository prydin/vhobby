console.log("1");

var redisApp = angular.module('redis', ['ngMaterial']);

console.log("Hi");

/**
 * Constructor
 */
function RedisController() {}

RedisController.prototype.onRedis = function() {
    this.scope_.messages.push([this.scope_.rating, this.scope_.msg]);
    var ms = this.scope_.messages.map(function(a) { return a[0] + "|" + a[1] });
    this.scope_.msg = "";
    var value = ms.join();
    this.http_.get("guestbook.php?cmd=set&key=messages&value=" + value)
		.then(angular.bind(this, function(response) {
                	this.scope_.redisResponse = "Updated.";
            }));
};

// Pick the default team and some nice colors
//
redisApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .backgroundPalette('grey')
    .accentPalette('blue');
});

redisApp.controller('RedisCtrl', function ($scope, $http, $location) {
        $scope.controller = new RedisController();
        $scope.controller.scope_ = $scope;
        $scope.controller.location_ = $location;
        $scope.controller.http_ = $http;

        $scope.controller.http_.get("guestbook.php?cmd=get&key=messages")
            .then(function(response) {
		var data = response.data;
                console.log(data);
		var msgs = data.data.split(",");
                $scope.messages = msgs.map(function(s) { return s.includes("|") ? s.split("|") : ["1", s]}); 
            });
});
