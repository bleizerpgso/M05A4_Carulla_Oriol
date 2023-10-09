import { Component } from '@angular/core';
import { app_information } from '../app_information';

@Component({
  selector: 'app-footer',
  templateUrl:'footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  author = app_information.app.footer.author
  email = app_information.app.footer.email
}
