// Archivo: new-product.commented.ts
// Componente que permite crear un nuevo producto localmente usando Reactive Forms.

import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';


/** formcontrol= controlador para cada dato
 * formgrup=directiva para formularios
 */

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  // contadorId: usado para generar ids simples para los productos creados localmente
  private contadorId: number = 1;
  // colección local de productos creada desde el formulario
  coleccionProductos: Producto[] = [];

  // nuevoProducto: FormGroup que define los campos del formulario y sus validaciones
  nuevoProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  })

  // crearProducto: se ejecuta al enviar el formulario; valida y agrega el producto a la colección
  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      const buevoProducto: Producto = {
        id: this.contadorId++,
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!,
      }
      this.coleccionProductos.push(buevoProducto);

      // console.log: muestra información en la consola del navegador (útil para depurar)
      console.log("producto agregado: "+this.nuevoProducto);
      console.log("coleccion actual de productos: "+this.coleccionProductos);
    }
  }
}
