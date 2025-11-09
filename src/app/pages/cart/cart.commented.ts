// Archivo: cart.commented.ts
// Componente que muestra los items del carrito y permite eliminarlos o vaciar el carrito.

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
  // items contiene los productos actualmente en el carrito
  items: Tarjeta[] = [];

  // inyectamos el servicio del carrito para acceder a sus métodos
  constructor(private cartService: CartService) {
    // al inicializar, obtenemos los items guardados en el servicio
    this.items = this.cartService.getItems();
  }

  // remove: quita un item del carrito usando el servicio y actualiza la lista local
  remove(item: Tarjeta) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  // clear: vacía todo el carrito
  clear() {
    this.cartService.clear();
    this.items = [];
  }
}
