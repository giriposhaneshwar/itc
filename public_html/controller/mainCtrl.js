app.controller('mainController', function ($scope, servicecall) {


    servicecall.getData();
//    var token = 
//
//
//    if (servicecall.checkLogin() == undefined) {
//        servicecall.tempToken();
//    } else {
//        servicecall.checkLogin();
//    }

    console.log("servicecall.checkLogin()", servicecall.checkLogin());
});