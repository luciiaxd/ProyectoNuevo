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
  private contadorId: number = 1;
  coleccionProductos: Producto[] = [];


  nuevoProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  })

  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      const buevoProducto: Producto = {
        id: this.contadorId++,
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!,
      }
      this.coleccionProductos.push(buevoProducto);

      console.log("producto agregado: "+this.nuevoProducto);
      console.log("coleccion actual de productos: "+this.coleccionProductos);
    }
  }
}
