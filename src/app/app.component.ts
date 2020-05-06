import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StevenCoinFrontEnd';

  languages = [
    { code: 'en-US', label: 'English'},
    { code: 'zh-Hans', label: '中文'}
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string){
  }
}
