// Archivo: cart.service.commented.ts
// Servicio que maneja el carrito de compras en memoria y expone el contador como observable.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarjeta } from '../models/tarjeta';

@Injectable({ providedIn: 'root' })
export class CartService {
  // items: arreglo que contiene los productos agregados al carrito
  private items: Tarjeta[] = [];
  // count$: BehaviorSubject que mantiene la cantidad actual y permite notificar cambios
  private count$ = new BehaviorSubject<number>(0);

  // cartCount$ es un observable que componentes pueden suscribirse para mostrar el contador
  public cartCount$ = this.count$.asObservable();

  // add: agrega un item al carrito y actualiza el contador
  add(item: Tarjeta) {
    this.items.push(item);
    this.count$.next(this.items.length);
  }

  // getItems: devuelve los items actuales (por referencia)
  getItems(): Tarjeta[] {
    return this.items;
  }

  // removeItem: elimina un item por su id y actualiza el contador
  removeItem(item: Tarjeta) {
    const idx = this.items.findIndex(i => i.id === item.id);
    if (idx > -1) {
      this.items.splice(idx, 1);
      this.count$.next(this.items.length);
    }
  }

  // clear: vacía el carrito y notifica contador en 0
  clear() {
    this.items = [];
    this.count$.next(0);
  }
}
