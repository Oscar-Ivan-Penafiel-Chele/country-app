import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', 
    loadChildren: () => import('./pages/classic/main-content/main-content.module').then( m => m.MainContentModule),
    title: 'Countries - Home',
  },
  {
    path: 'detail-country/:id', 
    loadChildren: () => import('./pages/classic/detail-country/detail-country.module').then( m => m.DetailCountryModule),
    title: 'Detail - Countrie'
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
