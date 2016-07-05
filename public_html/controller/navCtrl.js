app.controller('navController', function ($scope, servicecall) {

    $scope.showMessage = "Navigation Page";

    $scope.navItems = [
        {name: "Dashboard", link: "/dashboard"},
        {name: "Home", link: "/home"},
        {name: "Login", link: "/login"}
    ];

    $scope.subnav = 1;
    $scope.navToggle = 0;

    $scope.navExpand = function (evt, lvl) {
        if (lvl != 0) {
            $scope.subnav = lvl;
            $scope.navToggle = $scope.navToggle == 0 ? 1 : 0;
        } else {
            alert("this does not have submenu");
        }


    }
});