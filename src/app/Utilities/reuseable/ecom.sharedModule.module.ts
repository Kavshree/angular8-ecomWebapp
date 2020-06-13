import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { ProdListViewTemplateComponent } from './prodListView.reuseable.component';
import {ProdSingleItemViewTemplateComponent} from './prodSingleItemView.component.'
import {BreadcrumbComponent} from './ecomapp.breadcrumb';
@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [ProdListViewTemplateComponent, ProdSingleItemViewTemplateComponent,BreadcrumbComponent],
  providers: [],
  exports: [ProdListViewTemplateComponent,ProdSingleItemViewTemplateComponent,BreadcrumbComponent]
})
export class SharedModule { }