import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalclogPageRoutingModule } from './calclog-routing.module';

import { CalclogPage } from './calclog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalclogPageRoutingModule
  ],
  declarations: [CalclogPage]
})
export class CalclogPageModule {}
