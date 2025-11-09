// Archivo: perfumes.spec.commented.ts
// Prueba automática para el componente Perfumes. Explica en español cada parte.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfumes } from './perfumes';

describe('Perfumes', () => {
  // component: instancia del componente que vamos a probar
  let component: Perfumes;
  // fixture: contenedor de pruebas que permite acceder al DOM y al componente
  let fixture: ComponentFixture<Perfumes>;

  beforeEach(async () => {
    // Configuramos el módulo de pruebas con el componente Perfumes
    await TestBed.configureTestingModule({
      imports: [Perfumes]
    })
    .compileComponents();

    // Creamos el fixture y obtenemos la instancia del componente
    fixture = TestBed.createComponent(Perfumes);
    component = fixture.componentInstance;
    // Detectamos cambios iniciales para que Angular renderice la plantilla
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verifica que el componente se haya creado correctamente
    expect(component).toBeTruthy();
  });
});
