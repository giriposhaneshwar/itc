var app = angular.module("itcApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when("/login",
                    {
                        templateUrl: "./view/login.html",
                        controller: "loginController",
                    }
            )
            .when("/home",
                    {
                        templateUrl: "./view/home.html",
                        controller: "homeController",
                    }
            )
            .when("/dashboard",
                    {
                        templateUrl: "./view/dashboard.html",
                        controller: "dashboardController",
                    }
            )
            .otherwise({redirectTo: '/dashboard'});
});