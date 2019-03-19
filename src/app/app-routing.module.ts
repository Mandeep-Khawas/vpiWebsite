import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeVipComponent } from './become-vip/become-vip.component';
import { SliderImagesComponent } from './slider-images/slider-images.component';

const routes: Routes = [
    {path: 'become-vip', component: BecomeVipComponent},
    {path: '', component: SliderImagesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [ BecomeVipComponent, SliderImagesComponent]