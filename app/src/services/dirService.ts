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
                description: 'Test directory'
            },
            {
                name: 'Test2',
                description: 'Test2 directory'
            },
            {
                name: 'Test3',
                description: 'Test3 directory'
            },
            {
                name: 'Test4',
                description: 'Test4 directory'
            },
            {
                name: 'Test5',
                description: 'Test5 directory'
            }

        ]
    }
}