app.controller('navController', function ($scope, servicecall) {

    $scope.showMessage = "Navigation Page";
    var voidme = "javascript:void(0)";
    $scope.navItems = [
        {name: "Dashboard", link: "#/dashboard"},
        {name: "Invoice", link: "#/invoice", subnav: [
                {name: "Create", link: '#/invoice/c'},
                {name: "Edit", link: '#/invoice/e/id'},
                {name: "Manage", link: '#/invoice/m'}
            ]},
        {name: "Quotation", link: "#/quotation", subnav: [
                {name: "Create", link: '#/quotation/c'},
                {name: "Edit", link: '#/quotation/e/id'},
                {name: "Manage", link: '#/quotation/m'}
            ]},
        {name: "DC", link: "#/dc", subnav: [
                {name: "Create", link: '#/dc/c'},
                {name: "Edit", link: '#/dc/e/id'},
                {name: "Manage", link: '#/dc/m'}
            ]},
        {name: "Customers", link: "#/customers", subnav: [
                {name: "Create", link: '#/customers/c'},
                {name: "View", link: '#/customers/v'}
            ]},
        {name: "Products", link: "#/products", subnav: [
                {name: "Create", link: '#/products/c'},
                {name: "View", link: '#/products/v'}
            ]},
        {name: "Settings", link: "#/settings"},
        {name: "Logout", link: "#/logout"}
    ];

    $scope.subnav = 1;
    $scope.navToggle = 0;

    $scope.navExpand = function (evt, lvl) {
        if (lvl != 0) {
            $scope.subnav = lvl;
            $scope.navToggle = $scope.navToggle == 0 ? 1 : 0;
        } else {
//            alert("this does not have submenu");
        }


    }
});