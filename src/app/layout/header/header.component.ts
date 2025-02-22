import { Component, OnInit } from '@angular/core';
import { cartProducts } from 'src/app/mock/cart_product_example';
import { CartProduct } from 'src/app/models/Cart_product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  productsQuantity: number = 0;
  cartProducts: CartProduct[] = [];

  isMenuOpen: boolean = false;
  isCartOpen: boolean = false;

  // for cart add animation
  productAdded: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartList$.subscribe({
      next: (data) => {
        this.cartProducts = [...data];
        this.calculateQuantity();
        if (data.length > 0) {
          this.cartAnimation();
        }
      },
    });

    this.isMenuOpen = false;
    this.isCartOpen = false;
  }

  calculateQuantity(): void {
    this.productsQuantity = this.cartProducts.reduce(
      (prev, product) => prev + product.quantity,
      0
    );
  }

  deleteInCartProduct(id: number): void {
    this.cartService.deleteInCartProduct(id);
  }

  cartAnimation(): void {
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 200);
    console.log();
  }

  testt() {
    console.log("si")
  }
}
