import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.scss',
})
export class LandingPageComponentComponent {
  constructor(private router: Router) {}
  goto() {
    this.router.navigateByUrl('facesnapsng');
  }
}
