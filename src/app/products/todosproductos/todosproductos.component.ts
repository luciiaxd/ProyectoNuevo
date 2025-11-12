import { Component, Input } from '@angular/core'; // <- IMPORTANTE Input

@Component({
  selector: 'app-productos',
  templateUrl: './todosproductos.component.html',
  styleUrls: ['./todosproductos.component.css']
})
export class ProductosComponent {
  @Input() tarjeta: any[] = []; // <- Esto funciona si Input está importado
}
