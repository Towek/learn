/// <reference path="../_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var MainController = (function () {
        function MainController(dirService, $mdSidenav) {
            this.dirService = dirService;
            this.$mdSidenav = $mdSidenav;
            this.dirs = [];
            this.selected = null;
            var self = this;
            this.dirService
                .loadAllDirs()
                .then(function (dirs) {
                self.dirs = dirs;
                self.selected = dirs[0];
                console.log(self.dirs);
            });
        }
        //toggle button
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectDir = function (dir) {
            this.selected = dir;
            console.log(dir);
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.$inject = ['dirService', '$mdSidenav'];
        return MainController;
    }());
    angularMaterial.MainController = MainController;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=mainController.js.map