// Archivo: perfumes.commented.ts
// Este archivo contiene el componente de la sección "Perfumes (Cítrico)".
// He añadido comentarios en español para que una persona sin experiencia entienda
// qué hace cada parte: imports, decorador @Component, propiedades y métodos.

import { Component } from '@angular/core';

@Component({
  selector: 'app-perfumes-citrico', // nombre del componente en las plantillas
  templateUrl: './perfumes.html',   // referencia al archivo HTML de la vista
  styleUrls: ['./perfumes.css']      // referencia al archivo CSS de estilos
})
export class PerfumesCitricoPage {
  // En esta sección normalmente irían datos específicos de la vista, por ejemplo
  // un arreglo de productos filtrados por la categoría "cítrico".
  productos = [
    /* Ejemplo de estructura de un producto: { id: 1, nombre: 'Eau cítrica', precio: 29.99, img: 'ruta.jpg' } */
  ];

  // Constructor vacío: aquí no necesitamos inyectar servicios, pero si más tarde
  // la lista viniera del servidor o de un servicio, se inyectaría el servicio aquí.
  constructor() {}

  // Método ejemplo: seleccionar un producto para ver detalles o agregar al carrito.
  seleccionarProducto(producto: any) {
    // Aquí podríamos navegar a la página de detalles o emitir un evento.
    console.log('Producto seleccionado:', producto);
  }
}
