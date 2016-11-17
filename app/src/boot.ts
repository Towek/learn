/// <reference path="_all.ts" />

module angularMaterial {
    angular.module('angularMaterial', ['ngMaterial', 'ngMdIcons'])
        .service('dirService', DirService)
        .service('mailService', MailService)
        .controller('mainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider) =>{
            $mdIconProvider.
                icon('menu', './assets/svg/menu.svg', 24)
        })
}