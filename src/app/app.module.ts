import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderImagesComponent } from './slider-images/slider-images.component';
import { FooterComponent } from './footer/footer.component';
import { BecomeVipComponent } from './become-vip/become-vip.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { AboutComponent } from './about/about.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { RentalResidentialComponent } from './rental-residential/rental-residential.component';
import { RentalCommercialComponent } from './rental-commercial/rental-commercial.component';
import { SaleResidentialComponent } from './sale-residential/sale-residential.component';
import { SaleCommercialComponent } from './sale-commercial/sale-commercial.component';
import { SaleDevSiteComponent } from './sale-dev-site/sale-dev-site.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListWithUsComponent } from './list-with-us/list-with-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AssociateComponent } from './associate/associate.component';
import { ForRentComponent } from './for-rent/for-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderImagesComponent,
    FooterComponent,
    routingComponents,
    ForSaleComponent,
    AboutComponent,
    MyFavoritesComponent,
    RentalResidentialComponent,
    RentalCommercialComponent,
    SaleResidentialComponent,
    SaleCommercialComponent,
    SaleDevSiteComponent,
    AboutUsComponent,
    ListWithUsComponent,
    OurTeamComponent,
    CareerComponent,
    ContactUsComponent,
    AssociateComponent,
    ForRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
