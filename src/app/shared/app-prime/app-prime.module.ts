import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [CommonModule, CardModule, ButtonModule],
})
export class AppPrimeModule {}
