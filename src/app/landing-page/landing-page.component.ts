import { Component } from '@angular/core';
import { faAirFreshener, faDollar, faEuro, faICursor, faRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  pound = faEuro
  rs = faRupee
  dollar = faDollar
}
