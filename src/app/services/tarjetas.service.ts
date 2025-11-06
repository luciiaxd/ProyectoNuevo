import { Injectable } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { TARJETAS } from '../data/tarjetas.data';

@Injectable({ providedIn: 'root' })
export class TarjetasService {
  constructor() {}

  getAll(): Tarjeta[] {
    return TARJETAS;
  }

  getById(id: string): Tarjeta | undefined {
    return TARJETAS.find(t => t.id === id);
  }
}
