import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validator } from '@angular/forms';

/** formcontrol= controlador para cada dato
 * formgrup=directiva para formularios
 */

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
formGroup: any;

}
