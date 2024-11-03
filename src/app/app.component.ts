import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FaceSnapListComponent, HeaderComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {}
