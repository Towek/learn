/// <reference path="../_all.ts" />

module angularMaterial{
    export interface IMailService{
        loadAllMails(): ng.IPromise<Mail[]>
        selectedMail: mail
    }
    export class MailService implements IMailService{
        static $inject = ['$q'];
        
        constructor(private $q: ng.IQService){
        }
        
        selectedMail: mail = null
        
        loadAllMails(): nq.IPromise<Mail[]>{
            return this.$q.when(this.dirs);
        }
        
        private mails: Mail[] = [
            {
                from: `test@test.com`,
                topic: `test`,
                text: 'lalalala lalalal allala lal alalla lal ala',
                date: new Date("01.01.69")
            }
        ]
    }
}
    