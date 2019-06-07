import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { CognitoService } from './services/cognito.service';
import { Spinkit } from 'ng-http-loader';
export let browserRefresh = false;
//loading screen citation: https://github.com/mpalourdio/ng-http-loader
//refresh capabilities citation: https://stackblitz.com/edit/angular-r6-detect-browser-refresh?file=src%2Fapp%2Fapp.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public spinkit = Spinkit;
  subscription: Subscription;
  title = 'sms-ui';
  constructor(private router: Router, private cognito: CognitoService) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        
      }
    });
  }

}
