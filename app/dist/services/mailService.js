/// <reference path="../_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var MailService = (function () {
        function MailService($q) {
            this.$q = $q;
            this.selectedMail = null;
            this.mails = [
                {
                    from: "test@test.com",
                    topic: "test",
                    text: 'lalalala lalalal allala lal alalla lal ala',
                    date: new Date("01.01.69")
                }
            ];
        }
        MailService.prototype.loadAllMails = function () {
            return this.$q.when(this.dirs);
        };
        MailService.$inject = ['$q'];
        return MailService;
    }());
    angularMaterial.MailService = MailService;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=mailService.js.map