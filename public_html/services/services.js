app.service('servicecall', function (websql, $q, $http, $log) {
    var obj = new Object();

    obj.getData = function () {
        websql.db();
        console.log("From Service", route.homePage);

    };
    obj.getService = function (type, url, data) {

        $http[type](url, data).then(function (d) {
            console.log("dddd", d);
        });
    }

    obj.dashboardOnLoad = function (data, cb) {
        var url = serverUrl + route.dashboard;
        var request = data;
        var deferred = $q.defer();
//        $http.get(url)
//                .success(function (d) {
//                    if (cb)
//                        cb(d);
//                    console.log("hhhhhhh\n", d);
//                    deferred.resolve(d);
//                })
//                .error(function (msg, code) {
//                    if (cb)
//                        cb(msg);
//                    console.log(msg, code);
//                    deferred.reject(msg);
//                    $log.error(msg, code);
//                });

        obj.getService('get', url, data);

    };

    return obj;
});