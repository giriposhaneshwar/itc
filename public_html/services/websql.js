app.service('websql', function () {
    var obj = new Object();

    obj.db = function () {
        console.log("From WebSql", route.homePage);
    }

    return obj;
});