app.controller('dashboardController', function ($scope, servicecall) {

    $scope.showMessage = "dashboard Page";

    servicecall.dashboardOnLoad("k", function (d) {
        console.log("$scope.dashboardData", d);
    });

});
