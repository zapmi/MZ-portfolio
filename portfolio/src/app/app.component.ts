import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component'
// import { CanvasComponent } from './canvas/canvas.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  preventDefault() {
    event.preventDefault();
  }
  title = 'my-app';

  onClick(event: Event) {
    event.preventDefault();
  }
}
