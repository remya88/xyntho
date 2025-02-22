import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/Cart_product';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product | null = null;

  quantity: number = 0;

  mainPrice: number | undefined;
  realPrice?: number | undefined;
  discount?: number | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.product?.isSaleOff && this.product) {
      this.mainPrice = this.product.saleOffPrice;
      this.realPrice = this.product.price;

      if (this.product.saleOffPrice) {
        this.discount =
          (this.product.saleOffPrice * 100) / this.product.price / 100;
        console.log(this.discount);
      }
    } else {
      this.mainPrice = this.product?.price;
    }
  }

  addProductToCart(product: Product) {
    if (this.quantity > 0) {
      // check the correct price (normal price or discount)
      const productPrice = product.saleOffPrice ? product.saleOffPrice : product.price;
      // final price (including multipled)
      const finalPrice = productPrice * this.quantity;

      const productToCart: CartProduct = {
        title: product.productTitle,
        quantity: this.quantity,
        unitPrice: productPrice,
        finalPrice: finalPrice,
        image: product.images[0]
      };

      this.cartService.addProductToCart(productToCart);
    }
  }

  addProduct(): void {
    this.quantity++;
  }
  removeProduct(): void {
    this.quantity--;
  }

  testt(){
    alert("HOLA")
  }
}
