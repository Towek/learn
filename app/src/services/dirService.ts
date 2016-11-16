/// <reference path="../_all.ts" />

module angularMaterial{
    export interface IDirService{
        loadAllDirs(): ng.IPromise<Dir[]>
        selectedDir: Dir
    }
    export class DirService implements IDirService {
        static $inject = ['$q'];

        constructor(private $q: ng.IQService) {
        }

        selectedDir: Dir = null;

        loadAllDirs() : ng.IPromise<Dir[]> {
            return this.$q.when(this.dirs);
        }

        private dirs: Dir[] = [
            {
                name: 'Test',
                description: 'Test directory',
                mails: [
                    {
                        from: `test@test.com`,
                        topic: `test`,
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
                        from: `test2@test.com`,
                        topic: `test2`,
                        text: 'l2alalala 2lalalal alla2la lal alal2la l2al al2a',
                        date: new Date("02.02.69")
                    }
                ]
            }
        ]
    }
}