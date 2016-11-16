/// <reference path="_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    angular.module('angularMaterial', ['ngMaterial', 'ngMdIcons'])
        .service('dirService', DirService)
        .controller('mainController', MainController)
        .config(function ($mdIconProvider) {
        $mdIconProvider.
            icon('menu', './assets/svg/menu.svg', 24);
    });
})(angularMaterial || (angularMaterial = {}));
