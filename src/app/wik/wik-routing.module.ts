import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWikComponent } from './main-wik/main-wik.component';


const routes: Routes = [
  {
    path: '', component: MainWikComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikRoutingModule { }
