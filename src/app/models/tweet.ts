import {User} from './user';

export class Tweet {
    _id: number;
    content: string;
    user: User;

    constructor(_id: number, content: string, user: User) {
        this._id = _id;
        this.content = content;
        this.user = user;
    }
}

export const TWEETS = [
    new Tweet(1,
        'Lorem ipsum dolor asimet quam mnai varo ser',
        new User(1, 'Camilo', 'https://pbs.twimg.com/profile_images/982986918987169792/aCzqE6K7_bigger.jpg')),
    new Tweet(1,
        'Es que no nos importa si no que nos vale madre',
        new User(2, 'Julio', 'https://pbs.twimg.com/profile_images/859612982506135556/8nzopuMN_bigger.jpg'))
  ];
