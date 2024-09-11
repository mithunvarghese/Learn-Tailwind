import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: 'landing', component:LandingPageComponent
  },
  {
    path: 'card', component:CardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
