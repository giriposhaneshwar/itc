app.service('servicecall', function (websql, $q, $http, $log) {
    var obj = new Object();

    obj.getData = function () {
        websql.db();
        console.log("From Service", route.homePage);
    };

    obj.tempToken = function () {
        window.localStorage['token'] = 'temp-token';
    };
//    obj.tempToken();

    obj.checkLogin = function () {
        var userToken = window.localStorage['token'];
        if (userToken == undefined) {
            obj.tempToken();
        } else if (userToken == "temp-token") {
            // get token and consider that if user is logged in or not
            obj.postData(route.checkLogin, userToken, function (res) {
                alert(res);
            });
        }
        return userToken;
    };

    obj.getService = function (type, url, data) {
        $http[type](url, data).then(function (d) {
            console.log("dddd", d);
        });
    };

    obj.ajaxCall = function (data, cb) {
        var url = serverUrl + route.dashboard;

        $.ajax({
            method: "POST",
            url: url,
            data: data
        })
                .done(function (res) {
                    if (cb)
                        cb(res);
                });

    }
    obj.postData = function (hit, data, cb) {
        var deferred = $q.defer();
        var url = serverUrl + hit;
        $http.post(url)
                .success(function (d) {
                    console.log("Success Message", d);
                    deferred.resolve(d);
                })
                .error(function (msg, code) {
                    console.log("Failed Message", msg, code);

                    deferred.reject(msg);
                    $log.error(msg, code);
                });


        return deferred.promise;
    }

    obj.dashboardOnLoad = function (data, cb) {
        var request = data;
        obj.postData(route.dashboard, request).then(function (res) {
            if (cb)
                cb(res);
        });
    };

    return obj;
});