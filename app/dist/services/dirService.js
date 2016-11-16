/// <reference path="../_all.ts" />
var angularMaterial;
(function (angularMaterial) {
    var DirService = (function () {
        function DirService($q) {
            this.$q = $q;
            this.selectedDir = null;
            this.dirs = [
                {
                    name: 'Test',
                    description: 'Test directory',
                    mails: [
                        {
                            from: "test@test.com",
                            topic: "test",
                            text: 'lalalala lalalal allala lal alalla lal ala',
                            date: new Date("01.01.69")
                        }
                    ]
                },
                {
                    name: 'Test2',
                    description: 'Test2 directory',
                    mails: [
                        {
                            from: "test2@test.com",
                            topic: "test2",
                            text: 'l2alalala 2lalalal alla2la lal alal2la l2al al2a',
                            date: new Date("02.02.69")
                        }
                    ]
                }
            ];
        }
        DirService.prototype.loadAllDirs = function () {
            return this.$q.when(this.dirs);
        };
        DirService.$inject = ['$q'];
        return DirService;
    }());
    angularMaterial.DirService = DirService;
})(angularMaterial || (angularMaterial = {}));
//# sourceMappingURL=dirService.js.map