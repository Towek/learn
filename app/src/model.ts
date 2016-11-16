/// <reference path="_all.ts" />

module angularMaterial {

    export class Dir {
        constructor(
            public name: string,
            public description: string,
            public mails: Mail[] ){
        }
    }
    export class Mail {
        constructor(
            public from: string,
            public topic: string,
            public text: string,
            public date: Date ){

        }
    }
}