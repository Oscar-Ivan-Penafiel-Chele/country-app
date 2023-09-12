import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';
import { PrimengComponentsModule } from '@shared/components';
import { HeaderComponent } from '@shared/components';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorInterceptor } from './interceptors/http-error-interceptor.interceptor';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimengComponentsModule,
    HeaderComponent,
    HttpClientModule,
  ],
  providers: [
   {
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [PrimeNGConfig],
    multi: true,
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorInterceptor,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
