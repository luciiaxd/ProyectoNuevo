import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
import { TarjetasService } from '../../services/tarjetas.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  public infoTarjeta: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService, private cartService: CartService) {
    this.infoTarjeta = this.tarjetasService.getAll();
  }

  tarjetaSeleccionada: Tarjeta | null = null;
  vermas(tarjeta: Tarjeta){
    this.tarjetaSeleccionada = tarjeta;
  }
  addToCart(t: Tarjeta | null){
    if(!t) return;
    this.cartService.add(t);
  }
}



