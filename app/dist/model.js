/// <reference path="_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var Dir = (function () {
        function Dir(name, description, mails) {
            this.name = name;
            this.description = description;
            this.mails = mails;
        }
        return Dir;
    }());
    angularMaterial.Dir = Dir;
    var Mail = (function () {
        function Mail(from, topic, text, date) {
            this.from = from;
            this.topic = topic;
            this.text = text;
            this.date = date;
        }
        return Mail;
    }());
    angularMaterial.Mail = Mail;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=model.js.map