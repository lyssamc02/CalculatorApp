import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizecalcPageRoutingModule } from './customizecalc-routing.module';

import { CustomizecalcPage } from './customizecalc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomizecalcPageRoutingModule
  ],
  declarations: [CustomizecalcPage]
})
export class CustomizecalcPageModule {}
