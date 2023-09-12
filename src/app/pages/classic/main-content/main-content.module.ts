import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './page/main-content.component';
import { InputSearchComponent } from './components/input-search/page/input-search.component';
import { DropdownRegionComponent } from './components/dropdown-region/page/dropdown-region.component';
import { CardCountryComponent } from './components/card-country/page/card-country.component';
import { StatusDisplayComponent } from '@shared/components';


@NgModule({
  declarations: [
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    InputSearchComponent,
    DropdownRegionComponent,
    CardCountryComponent,
    StatusDisplayComponent
  ]
})
export class MainContentModule { }
