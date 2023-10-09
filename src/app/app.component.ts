import { Component } from '@angular/core';
import { app_information } from './app_information';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    return app_information.app.generalInformation.title;
  }
}
