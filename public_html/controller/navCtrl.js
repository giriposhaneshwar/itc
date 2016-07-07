app.controller('navController', function ($scope, servicecall) {

    $scope.showMessage = "Navigation Page";
    var voidme = "javascript:void(0)";
    $scope.navItems = [
        {name: "Dashboard", link: "#/dashboard", subnav: [
                {name: "L_1", link: voidme},
                {name: "L_2", link: voidme},
                {name: "L_3", link: voidme}
            ]},
        {name: "Home", link: "#/home", subnav: [
                {name: "L_1", link: voidme},
                {name: "L_2", link: voidme},
                {name: "L_3", link: voidme}
            ]},
        {name: "Login", link: "#/login"}
    ];

    $scope.subnav = 1;
    $scope.navToggle = 0;

    $scope.navExpand = function (evt, lvl) {
        if (lvl != 0) {
            $scope.subnav = lvl;
            $scope.navToggle = $scope.navToggle == 0 ? 1 : 0;
        } else {
//            alert("this does not have submenu");
        }


    }
});