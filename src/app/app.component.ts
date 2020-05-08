import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StevenCoinFrontEnd';

  languages = [
    { code: 'en-US', country:'us', label: 'English'},
    { code: 'zh-Hans', fcountrylag:'cn', label: '中文'},
    { code: 'ja', country:'jp', label: '日本語'}
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string){
  }
}
