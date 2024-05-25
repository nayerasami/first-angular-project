import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductItmeComponent } from './components/porduct-list/product-itme/product-itme.component';
import { TabesecComponent } from './components/tabesec/tabesec.component';
import { CarsoulbannerComponent } from './components/carsoulbanner/carsoulbanner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ProductItmeComponent,
    TabesecComponent,
    CarsoulbannerComponent,
    FooterComponent,
    AboutusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
