// Archivo: home.commented.ts
// Componente simple de la página de inicio. Por ahora no tiene lógica en TypeScript,
// solo se define el selector y las plantillas (HTML/CSS) asociadas.

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [], // aquí se listarían módulos adicionales si fueran necesarios
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Este componente está vacío porque toda la presentación está en la plantilla HTML.
}
