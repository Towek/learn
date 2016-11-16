/// <reference path="../_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
            this.selected = null;
        }
        //toggle button
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.$inject = ['$mdSidenav'];
        return MainController;
    }());
    angularMaterial.MainController = MainController;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=mainController.js.map