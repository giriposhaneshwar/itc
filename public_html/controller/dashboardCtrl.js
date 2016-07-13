app.controller('dashboardController', function ($scope, servicecall) {

    $scope.showMessage = "dashboard Page";

    servicecall.dashboardOnLoad("k", function (d) {
        $scope.dashboardData = d;
    });

});
