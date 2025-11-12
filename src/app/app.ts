import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";

import { Products } from './pages/products/products';
import { Tarjeta } from './models/tarjeta';
import { TarjetasService } from './services/tarjetas.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('proyectonuevo');
  public tarjetas: Tarjeta[] = [];
  // Tarjetas destacadas que se mostrarán en la página raíz
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
    },
    {
    id: "5T",
    img: "assets/cloud.jpg",
    alt: "Imagen de un perfume",
    titulo: "Cloud Ariana Grande",
    descripcion: " floral frutal gourmand",
    precio: 260.000
  },
  {
    id: "6T",
    img: "assets/cloudpink.jpg",
    alt: "Imagen de un perfume",
    titulo: "Cloud Pink Ariana Grande",
    descripcion: "Oriental Vainilla",
    precio: 300.000
  },
  {
    id: "7T",
    img: "assets/tnknext.jpg",
    alt: "aa",
    titulo:"Thank U, Next Ariana Grande",
    descripcion: " floral frutal gourmand",
    precio:230.000
  },
  {
    id: "8T",
    img: "assets/arianag.jpg",
    alt: "Imagen de un perfume",
    titulo: "Ari Ariana Grande",
    descripcion: "Aroma floral frutal.",
    precio: 230.000
  },
  {
    id: "9T",
    img: "assets/3346470148994_0f87.png",
    alt: "Imagen de un perfume",
    titulo: "Guerlain Terracotta Le Parfum EDT",
    descripcion: "ramo floral de ylang-ylang, jazmín y azahar.",
    precio: 400.000
  },
  {
    id: "10T",
    img: "assets/D_NQ_NP_2X_701379-MLA83996198499_042025-F.webp",
    alt: "Imagen de un perfume",
    titulo: "Cher Dieciocho Glossy",
    descripcion: "Aroma Dulce.",
    precio: 190.000
  },
  {
    id: "11T",
    img: "assets/dcggg.avif",
    alt: "Imagen de un perfume",
    titulo: "Dolce Garden Dolce&Gabbana",
    descripcion: "Aroma floral.",
    precio: 200.000
  },
  {
    id: "12T",
    img: "assets/perfume-heeley_coccobello_100ml.webp",
    alt: "Imagen de un perfume",
    titulo: "Coco Extreme de Comptoir Sud Pacifique",
    descripcion: "Aroma coco avainillado.",
    precio: 304.000
  },
  {
    id: "13T",
    img: "assets/41J6OjFByzL._SY300_SX300_QL70_FMwebp_.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Bombshell Eau de Parfum",
    descripcion: "notas de fruta de la pasión púrpura, peonía.",
    precio: 250.000
  },
  {
    id: "14T",
    img: "assets/good-girl-blush-elixir-eau-de-parfum-carolina-herrera.jpg",
    alt: "Imagen de un perfume",
    titulo: "Good Girl Blush Elixir de Carolina Herrera",
    descripcion: "Aroma floral frutal.",
    precio: 440.000
  },
  {
    id: "15T",
    img: "assets/7134Ds7j4dL._SX425_.jpg",
    alt: "Imagen de un perfume",
    titulo: "Gucci Bloom",
    descripcion: "Fragancia floral.",
    precio: 420.000
  },
  {
    id: "16T",
    img: "assets/shopping.webp",
    alt: "Imagen de un perfume",
    titulo: "Yves Saint Laurent Libre Edp",
    descripcion: "Aroma floral .",
    precio: 580.000
  },
  {
    id: "17T",
    img: "assets/XXL_p0217190916.webp",
    alt: "Imagen de un perfume",
    titulo: "Flower Knows - Strawberry Cupid Perfume",
    descripcion: "Aroma Dulce a frutilla.",
    precio: 300.000
  },
  {
    id: "18T",
    img: "assets/eternal-roots_100ml__FINAL.webp",
    alt: "Imagen de un perfume",
    titulo: "ETERNAL ROOTS PARFUM orabella",
    descripcion: "Aroma .",
    precio: 350.000
  },
  {
    id: "19T",
    img: "assets/375x500.92428.avif",
    alt: "Imagen de un perfume",
    titulo: "Window2Soul Orebella",
    descripcion: "Aroma rosa y jazmín con notas de limón.",
    precio: 350.000
  },
  {
    id: "21T",
    img: "assets/170782-800-1067.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Mist Corporal Romantic",
    descripcion: "Aroma Pétalos de rosa. Almizcle puro..",
    precio: 30.000
  },
   {
    id: "22T",
    img: "assets/170783-800-1067.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Mist Corporal Rush",
    descripcion: "Aroma Frutal",
    precio: 30.000
  },
  {
    id: "23T",
    img: "assets/183803-800-1067.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Mist Corporal Sizzling Vanilla",
    descripcion: "Aroma vainilla dulce ",
    precio: 30.000
  },
  {
    id: "24T",
    img: "assets/185785-800-1067.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Mist Corporal Bare Vanilla",
    descripcion: "Aroma vainilla suave ",
    precio: 30.000
  },
  {
    id: "25T",
    img: "assets/185842-800-1067.webp",
    alt: "Imagen de un perfume",
    titulo: "Victoria's Secret Mist Corporal Coconut Passion",
    descripcion: "Aroma coco tropical ",
    precio: 30.000
  },
  {
    id: "26T",
    img: "assets/Prada_25_Paradoxe_Radical_Essence_Functional Packshot_90ml_Bottle Single_Front No Shadow_3614274305401.webp",
    alt: "Imagen de un perfume",
    titulo: "Prada Paradoxe Radical Essence Parfum ",
    descripcion: "Aroma amaderado floral ",
    precio: 380.000
  },
  ];
  public tarjetaSeleccionada: Tarjeta | null = null;

  constructor(private tarjetasService: TarjetasService, public cartService: CartService){
    this.tarjetas = this.tarjetasService.getAll();
  }

  vermas(t: Tarjeta) {
    this.tarjetaSeleccionada = t;
  }

  addToCart(t: Tarjeta | null) {
    if (!t) return;
    this.cartService.add(t);
  }
}
 
