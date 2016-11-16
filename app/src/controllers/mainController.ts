/// <reference path="../_all.ts" />

module angularMaterial {
    export class MainController{

        static $inject = ['dirService','$mdSidenav']
        constructor(
            private dirService: IDirService,
            private $mdSidenav: angular.material.ISidenavService){
            var self = this

            this.dirService
                .loadAllDirs()
                .then((dirs: Dir[]) => {
                    self.dirs = dirs
                    self.selected = dirs[0]
                    console.log(self.dirs)
                })
        }
        dirs: Dir[] = []
        selected: Dir = null
        //toggle button
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectDir (dir: Dir) : void {
            this.selected = dir
            console.log(dir)
            var sidenav = this.$mdSidenav('left')
            if(sidenav.isOpen()){
                sidenav.close()
            }
        }
    }
}