import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartPage {
  items: Tarjeta[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  remove(item: Tarjeta) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  clear() {
    this.cartService.clear();
    this.items = [];
  }
}
