import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPrimeModule, LibModule, SharedModule } from '../shared';
import { SecondComponent } from './components/second.component';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, SharedModule, AppPrimeModule, LibModule],
  exports: [SecondComponent],
})
export class SecondModule {}
