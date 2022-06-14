import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calclog',
    loadChildren: () => import('./pages/calclog/calclog.module').then( m => m.CalclogPageModule)
  },
  {
    path: 'customizecalc',
    loadChildren: () => import('./pages/customizecalc/customizecalc.module').then( m => m.CustomizecalcPageModule)
  },
  {
    path: 'orientation',
    loadChildren: () => import('./pages/orientation/orientation.module').then( m => m.OrientationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
