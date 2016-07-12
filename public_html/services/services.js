app.service('servicecall', function (websql) {
    var obj = new Object();

    obj.getData = function () {
        websql.db();
        console.log("From Service", route.homePage);

    };
    
    obj.dashboardOnLoad = function (data) {
        var url = serverUrl + route.dashboard;
        var request = data;

        console.log("URL", url);
    };

    return obj;
});