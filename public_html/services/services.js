app.service('servicecall', function (websql) {
    var obj = new Object();

    obj.getData = function () {
        websql.db();
        console.log("From Service", route.homePage);
    }

    return obj;
});