/// <reference path="../_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var MainController = (function () {
        function MainController(dirService, mailService, $mdSidenav) {
            this.dirService = dirService;
            this.mailService = mailService;
            this.$mdSidenav = $mdSidenav;
            this.dirs = [];
            this.selected = null;
            this.mails = [];
            this.selected = null;
            var self = this;
            this.dirService
                .loadAllDirs()
                .then(function (dirs) {
                self.dirs = dirs;
                self.selected = dirs[0];
                console.log(self.dirs);
            });
            /*this.mailService
                .loadAllMails()
                .then((mails: Mail[]) => {
                    self.mails = mails
                    self.selected = mails[0]
                    console.log(self.mails)
                })*/
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
        MainController.prototype.selectMail = function (mail) {
            this.selected = mail;
            console.log(mail);
        };
        MainController.prototype.removeMail = function (mail) {
            var mailIndex = this.selected.mails.indexOf(mail);
            this.selected.mails.splice(mailIndex, 1);
            console.log(mailIndex);
        };
        MainController.$inject = ['dirService', 'mailService', '$mdSidenav'];
        return MainController;
    }());
    angularMaterial.MainController = MainController;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=mainController.js.map