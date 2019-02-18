export class User {

    constructor(
        // tslint:disable-next-line:variable-name
        public _id: number = 5,
        // tslint:disable-next-line:variable-name
        public first_name: string = '',
        // tslint:disable-next-line:variable-name
        public last_name: string = '',
        public email: string = '',
        public editable: boolean = false
    ) {

    }


}
