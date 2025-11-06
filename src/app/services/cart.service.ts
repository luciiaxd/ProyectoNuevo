import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarjeta } from '../models/tarjeta';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Tarjeta[] = [];
  private count$ = new BehaviorSubject<number>(0);

  public cartCount$ = this.count$.asObservable();

  add(item: Tarjeta) {
    this.items.push(item);
    this.count$.next(this.items.length);
  }

  getItems(): Tarjeta[] {
    return this.items;
  }

  removeItem(item: Tarjeta) {
    const idx = this.items.findIndex(i => i.id === item.id);
    if (idx > -1) {
      this.items.splice(idx, 1);
      this.count$.next(this.items.length);
    }
  }

  clear() {
    this.items = [];
    this.count$.next(0);
  }
}
