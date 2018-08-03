import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import { Tweet } from '../../models/Tweet';
import { User } from '../../models/user';
import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];
  content: string;
  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.tweets = this.tweetsService.getLastTweets();
  }
  addTweet(content: string) {
    this.tweetsService.insertTweet(
      new Tweet( new Date().getTime(), content, this.tweetsService.getCurrentUser())
    );
    this.content = '';
    this.tweets = this.tweetsService.getLastTweets();
  }

}
