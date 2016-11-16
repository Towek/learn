/// <reference path="../_all.ts" />

module angularMaterial {
    export class MainController{

        static $inject = ['$mdSidenav']
        constructor(
            private $mdSidenav: angular.material.ISidenavService
        ){

        }
        message: string = "Hello from controller!"

        //toggle button
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }
    }
}