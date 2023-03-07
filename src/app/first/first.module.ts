import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPrimeModule, CardsComponent, LibModule, SharedModule } from '../shared';
import { FirstComponent } from './components/first.component';



@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, SharedModule, AppPrimeModule, LibModule],
  exports: [FirstComponent]
})
export class FirstModule {}
