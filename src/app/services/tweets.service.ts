import { Injectable } from '@angular/core';
import { Tweet, TWEETS } from '../models/Tweet';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  tweets = TWEETS;
  constructor() { }

  getLastTweets(): any[] {
    return this.tweets;
  }

  getCurrentUser(): User {
    return this.tweets[0].user;
  }

  insertTweet( tweet: Tweet) {
    this.tweets.push(tweet);
  }

}
