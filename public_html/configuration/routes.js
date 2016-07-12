
var path = window.location.href;
var getHash = window.location.hash;

var orgUrl = path.replace(getHash, "");
var orgUrl = orgUrl.replace("8383", "80");  // this is tempruary solution
var serverUrl = orgUrl + "itcServer";
//alert(serverUrl);
console.log("Service Url", serverUrl);
var route = {
    dashboard: "/dashboard/getAllData"
};
