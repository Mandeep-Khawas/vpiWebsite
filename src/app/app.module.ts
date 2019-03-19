import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderImagesComponent } from './slider-images/slider-images.component';
import { FooterComponent } from './footer/footer.component';
import { BecomeVipComponent } from './become-vip/become-vip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderImagesComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
