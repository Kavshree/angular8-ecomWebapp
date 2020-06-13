import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prod-item',
  template: `<div>{{prodId}}</div>`,
  styleUrls: ['../common/css/ecomStyles.css']
})

export class ProdSingleItemViewTemplateComponent {
    @Input("prodListArr") prodId = 0;
   }