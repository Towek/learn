/// <reference path="../_all.ts" />

module angularMaterial {
    export class MainController{

        static $inject = ['dirService','mailService','$mdSidenav']
        constructor(
            private dirService: IDirService,
            private mailService: IMailService,
            private $mdSidenav: angular.material.ISidenavService){
            var self = this

            this.dirService
                .loadAllDirs()
                .then((dirs: Dir[]) => {
                    self.dirs = dirs
                    self.selected = dirs[0]
                    console.log(self.dirs)
                })
            /*this.mailService
                .loadAllMails()
                .then((mails: Mail[]) => {
                    self.mails = mails
                    self.selected = mails[0]
                    console.log(self.mails)
                })*/
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
        
        mails: Mail[] = []
        selected: Mail = null
        
        selectMail (mail: Mail) : void {
            this.selected = mail
            console.log(mail)
        }
        
        removeMail(mail: Mail) : void {
            var mailIndex = this.selected.mails.indexOf(mail)
            this.selected.mails.splice(mailIndex, 1)
            console.log(mailIndex)
        }
    }
}