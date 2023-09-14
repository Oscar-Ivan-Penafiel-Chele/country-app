import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AnimateModule } from 'primeng/animate';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    AnimateModule,
    ProgressSpinnerModule,
    
  ]
})
export class PrimengComponentsModule { }
