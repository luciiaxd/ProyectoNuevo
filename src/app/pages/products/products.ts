import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
public infoTarjeta: Tarjeta [];

  constructor() { 
    this.infoTarjeta =[
      {
        id: "1T",
        img: "../../../assets/5ede827ef2414-miss-dior-dama-jpg.jpg",
        alt: "Imagen de un perfume",
        titulo: "Miss Dior",
        descripcion: "Oriental Floral",
        fechapublicacion: 2025
      },
      {
        id: "2T",
        img: "../../../assets/chanel.jpg",
        alt: "Imagen de un perfume",
        titulo: "Chanel N°5",
        descripcion: "Aldehídos, ylang-ylang, neroli, bergamota y limón.",
        fechapublicacion: 2025
      },
      {
        id: "3T",
        img: "../../../assets/perfume mujer dolce gabbana,jpg.jpg",
        alt: "Imagen de un perfume",
        titulo: "The one Dolce&Gabbana",
        descripcion: "dulce floral",
        fechapublicacion: 2025
      },
      {
        id: "4T",
        img: "../../../assets/coso.jpg",
        alt: "Imagen de un perfume",
        titulo: "Beach Walk Maison Margiela",
        descripcion: "bergamota e ylang-ylang",
        fechapublicacion: 2025
      },
      {
        id: "5T",
        img: "../../../assets/cloud.jpg",
        alt: "Imagen de un perfume",
        titulo: "Cloud Ariana Grande",
        descripcion: " floral frutal gourmand",
        fechapublicacion: 2025
      },
      {
        id: "6T",
        img: "../../../assets/cloudpink.jpg",
        alt: "Imagen de un perfume",
        titulo: "Cloud Pink Ariana Grande",
        descripcion: "Oriental Vainilla",
        fechapublicacion: 2025
      },
      {
        id: "7T",
        img: "../../../assets/tnknext.jpg",
        alt: "aa",
        titulo:"Thank U, Next Ariana Grande",
        descripcion: " floral frutal gourmand",
        fechapublicacion:0
      },
      {
        id: "8T",
        img: "../../../assets/arianag.jpg",
        alt: "Imagen de un perfume",
        titulo: "Ari Ariana Grande",
        descripcion: "Aroma floral frutal.",
        fechapublicacion: 2025
      }
      
    ]
  }
  tarjetaSeleccionada: any=null;
vermas(tarjeta:any){
  this.tarjetaSeleccionada=tarjeta
}
}



