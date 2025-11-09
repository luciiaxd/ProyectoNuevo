// Archivo: app.commented.ts
// Componente raíz de la aplicación. Contiene la lógica para mostrar tarjetas destacadas,
// manejar la tarjeta seleccionada y añadir productos al carrito.

import { Component, signal } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";

import { Products } from './pages/products/products';
import { Tarjeta } from './models/tarjeta';
import { TarjetasService } from './services/tarjetas.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // signal: función de Angular para crear un estado reactivo simple (a partir de v16+)
  protected readonly title = signal('proyectonuevo');
  public tarjetas: Tarjeta[] = [];

  // featuredTarjetas: ejemplo de productos que se muestran en la página principal
  public featuredTarjetas: Tarjeta[] = [
    {
      id: 'chanel',
      img: 'assets/chanel.webp',
      alt: 'Chanel N°5',
      titulo: 'Chanel N°5',
      descripcion: 'Aldehídos, ylang-ylang, neroli, bergamota y limón.',
      precio: 340.000
    },
    {
      id: 'dior',
      img: 'assets/5ede827ef2414-miss-dior-dama-jpg.jpg',
      alt: 'Miss Dior',
      titulo: 'Miss Dior',
      descripcion: 'Oriental Floral',
      precio: 400.000
    },
    {
      id: 'ysl',
      img: '../assets/433673-800-auto.webp',
      alt: 'YSL Black Opium',
      titulo: 'YSL Black Opium',
      descripcion: 'Adictivo y electrizante. Notas de café y vainilla.',
      precio: 420.000
    },
    {
      id: 'ch',
      img: 'assets/coso.jpg',
      alt: 'REPLICA Beach Walk',
      titulo: 'Beach Walk Maison Margiela',
      descripcion: 'Floral Frutal Gourmand para Mujeres.',
      precio: 185.000
    }
  ];
  public tarjetaSeleccionada: Tarjeta | null = null;

  // Constructor: inyecta servicios para acceder a datos y al carrito
  constructor(private tarjetasService: TarjetasService, public cartService: CartService){
    // obtiene todas las tarjetas del servicio al inicializar
    this.tarjetas = this.tarjetasService.getAll();
  }

  // vermas: guarda la tarjeta seleccionada para mostrar en el modal
  vermas(t: Tarjeta) {
    this.tarjetaSeleccionada = t;
  }

  // addToCart: añade al carrito si la tarjeta existe
  addToCart(t: Tarjeta | null) {
    if (!t) return;
    this.cartService.add(t);
  }
}
