import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NowaStronaPage } from './nowa-strona.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NowaStronaPage,
        }
      ])],
  	declarations: [NowaStronaPage],
  	providers: [],
  	exports: [] })
export class NowaStronaPageModule {
}
