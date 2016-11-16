/// <reference path="_all.ts" />

module angularMaterial {
    angular.module('angularMaterial', ['ngMaterial', 'ngMdIcons'])
        .controller('mainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider) =>{
            $mdIconProvider.
                icon('menu', './assets/svg/menu.svg', 24)
        })
}