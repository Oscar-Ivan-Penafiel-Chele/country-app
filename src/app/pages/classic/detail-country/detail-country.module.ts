import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCountryRoutingModule } from './detail-country-routing.module';
import { DetailCountryComponent } from './page/detail-country.component';
import { PrimengComponentsModule, StatusDisplayComponent } from '@shared/components';
import { CountryBordersComponent } from './components/country-borders/page/country-borders.component';
import { CountryInformationComponent } from './components/country-information/page/country-information.component';
import { CountryLanguagesComponent } from './components/country-languages/page/country-languages.component';

@NgModule({
  declarations: [
    DetailCountryComponent
  ],
  imports: [
    CommonModule,
    DetailCountryRoutingModule,
    PrimengComponentsModule,
    CountryBordersComponent,
    CountryInformationComponent,
    CountryLanguagesComponent,
    StatusDisplayComponent
  ]
})
export class DetailCountryModule { }
