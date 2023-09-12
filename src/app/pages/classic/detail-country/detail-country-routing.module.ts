import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCountryComponent } from './page/detail-country.component';

const routes: Routes = [
  {path: '', component: DetailCountryComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCountryRoutingModule { }
