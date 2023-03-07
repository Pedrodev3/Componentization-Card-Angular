import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibModule } from './lib';
import { AppPrimeModule } from './app-prime';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LibModule,
    AppPrimeModule
  ]
})
export class SharedModule { }
