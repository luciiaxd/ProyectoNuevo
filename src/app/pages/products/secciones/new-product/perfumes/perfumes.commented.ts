// Archivo: perfumes.commented.ts
// Componente de la sección "Cítrico" (perfumes). Contiene una lista local de productos (infoTarjeta)
// y funciones para seleccionar una tarjeta y mostrarla en un modal.

import { Component } from '@angular/core';
import { Tarjeta } from '../../../../../models/tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfumes',
  imports: [CommonModule],
  templateUrl: './perfumes.html',
  styleUrl: './perfumes.css'
})
export class Perfumes {
  // infoTarjeta: arreglo con los productos que se mostrarán en la plantilla HTML
  public infoTarjeta: Tarjeta [];

  constructor() { 
    // Inicializamos el arreglo con datos de ejemplo (rutas relativas a assets)
    this.infoTarjeta =[
      {
        id: "1T",
        img: "../../../assets/5ede827ef2414-miss-dior-dama-jpg.jpg",
        alt: "Imagen de un perfume",
        titulo: "Miss Dior",
        descripcion: "Oriental Floral",
        precio: 310000
      },
      {
        id: "2T",
        img: "../../../assets/chanel.jpg",
        alt: "Imagen de un perfume",
        titulo: "Chanel N°5",
        descripcion: "Aldehídos, ylang-ylang, neroli, bergamota y limón.",
        precio: 2025
      },
      // ...más objetos con la misma estructura (titulo, descripcion, precio, img, alt)
    ]
  }

  // tarjetaSeleccionada: guarda la tarjeta que el usuario ha seleccionado para mostrar más info
  tarjetaSeleccionada: any = null;

  // vermas: función llamada desde la plantilla para establecer la tarjeta seleccionada
  vermas(tarjeta:any){
    this.tarjetaSeleccionada = tarjeta
  }
}
