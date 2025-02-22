import { Component, OnInit } from '@angular/core';
import { productExample } from 'src/app/mock/product_example';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  //TODO: create "real" fetch data
  product: Product | null = null;

  ngOnInit(): void {
    this.product = productExample;
  }


}
