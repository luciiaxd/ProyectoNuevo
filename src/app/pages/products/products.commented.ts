// Archivo: products.commented.ts
// Componente que muestra la lista de productos y permite ver más detalles o agregar al carrito.

import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
import { TarjetasService } from '../../services/tarjetas.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  // imports: módulos que necesita este componente (CommonModule aporta directivas como *ngIf/*ngFor)
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  // infoTarjeta es un arreglo de objetos Tarjeta que contiene los productos a mostrar
  public infoTarjeta: Tarjeta[] = [];

  // El constructor inyecta los servicios necesarios: el servicio que provee las tarjetas y el servicio del carrito
  constructor(private tarjetasService: TarjetasService, private cartService: CartService) {
    // Al crear el componente obtenemos todas las tarjetas desde el servicio
    this.infoTarjeta = this.tarjetasService.getAll();
  }

  // Tarjeta seleccionada para mostrar en el modal; inicialmente nula (ninguna seleccionada)
  tarjetaSeleccionada: Tarjeta | null = null;

  // vermas: almacena la tarjeta seleccionada cuando el usuario pide ver más
  vermas(tarjeta: Tarjeta){
    this.tarjetaSeleccionada = tarjeta;
  }

  // addToCart: añade una tarjeta al carrito usando el CartService
  addToCart(t: Tarjeta | null){
    if(!t) return; // si no hay tarjeta, no hace nada
    this.cartService.add(t);
  }
}
