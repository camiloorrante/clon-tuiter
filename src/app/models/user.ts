export class User {
    _id: number;
    name: string;
    avatar: string;
    constructor( _id: number, name: string, avatar: string) {
        this._id = _id;
        this.name = name;
        this.avatar = avatar;
    }
}
