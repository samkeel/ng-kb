import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikRoutingModule } from './wik-routing.module';
import { MainWikComponent } from './main-wik/main-wik.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [MainWikComponent],
  imports: [
    CommonModule,
    WikRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    MatButtonToggleModule    
  ]
})
export class WikModule { }
