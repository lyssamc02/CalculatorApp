import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalclogPage } from './calclog.page';

const routes: Routes = [
  {
    path: '',
    component: CalclogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalclogPageRoutingModule {}
