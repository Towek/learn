/// <reference path="_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    angular.module('angularMaterial', ['ngMaterial', 'ngMdIcons'])
        .service('dirService', angularMaterial.DirService)
        .service('mailService', angularMaterial.MailService)
        .controller('mainController', angularMaterial.MainController)
        .config(function ($mdIconProvider) {
        $mdIconProvider.
            icon('menu', './assets/svg/menu.svg', 24);
    });
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=boot.js.map