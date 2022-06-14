import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizecalcPage } from './customizecalc.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizecalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizecalcPageRoutingModule {}
