var route, path, getHash, orgUrl, serverUrl;
(function () {
    'use strict';
    path = window.location.href;
    getHash = window.location.hash;

    orgUrl = path.replace(getHash, "");
    orgUrl = orgUrl.replace("8383", "80");  // this is tempruary solution
    serverUrl = orgUrl + "itcServer";
//console.log("Service Url", serverUrl);


    route = {
        dashboard: "/dashboard/getAllData",
        checkLogin: "/login/checkLogin"
    };

}());