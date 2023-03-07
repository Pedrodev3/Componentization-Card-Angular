import { AppPrimeModule } from './../app-prime/app-prime.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    AppPrimeModule
  ],
  exports: [
    CardsComponent
  ]
})
export class LibModule { }
