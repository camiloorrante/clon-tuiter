import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { WhoFollowComponent } from './components/who-follow/who-follow.component';
import { TweetsService } from './services/tweets.service';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    TweetsComponent,
    WhoFollowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
