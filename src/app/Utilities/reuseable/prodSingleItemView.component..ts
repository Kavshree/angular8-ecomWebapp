import { Component, OnInit, Input } from '@angular/core';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prod-item',
  template: `<div>{{prodId}}</div>`,
  styleUrls: ['../common/css/ecomStyles.css'],
  providers: [ProdClothesService]
})

export class ProdSingleItemViewTemplateComponent {
    prodId : string;
    sub;
    constructor(protected _activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      this.sub = this._activatedRoute.params.subscribe(params => {
         this.prodId = params['id'];
        
         // In a real app: dispatch action to load the details here.
      });
    }
    

   }