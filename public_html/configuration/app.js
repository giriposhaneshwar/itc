var app = angular.module("itcApp", ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when("/login",
                    {
                        templateUrl: "./views/login.html",
                        controller: "loginController",
                    }
            )
            .when("/home",
                    {
                        templateUrl: "./views/home.html",
                        controller: "homeController",
                    }
            )
            .when("/dashboard",
                    {
                        templateUrl: "./views/dashboard.html",
                        controller: "dashboardController",
                    }
            )
            .otherwise({redirectTo: '/dashboard'});
});