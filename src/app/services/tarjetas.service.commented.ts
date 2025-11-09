// Archivo: tarjetas.service.commented.ts
// Servicio que provee las tarjetas (productos) desde un arreglo de datos.

import { Injectable } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { TARJETAS } from '../data/tarjetas.data';

// @Injectable({ providedIn: 'root' }) marca la clase como un servicio inyectable
// y 'providedIn: root' hace que haya una única instancia en toda la aplicación.
@Injectable({ providedIn: 'root' })
export class TarjetasService {
  constructor() {}

  // getAll devuelve todas las tarjetas (productos)
  getAll(): Tarjeta[] {
    return TARJETAS;
  }

  // getById busca una tarjeta por su id y la devuelve o undefined si no existe
  getById(id: string): Tarjeta | undefined {
    return TARJETAS.find(t => t.id === id);
  }
}
