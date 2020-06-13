import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ProdListViewTemplateComponent } from './prodListView.reuseable.component';
import {ProdSingleItemViewTemplateComponent} from './prodSingleItemView.component.'
import {BreadcrumbComponent} from './ecomapp.breadcrumb';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

@NgModule({
  imports: [CommonModule,HttpClientModule,RouterModule],
  declarations: [ProdListViewTemplateComponent, ProdSingleItemViewTemplateComponent,BreadcrumbComponent],
  providers: [ProdClothesService],
  exports: [ProdListViewTemplateComponent,ProdSingleItemViewTemplateComponent,BreadcrumbComponent]
})
export class SharedModule { }