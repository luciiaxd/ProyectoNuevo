// Archivo: home.spec.commented.ts
// Prueba automática para el componente Home. Explica paso a paso qué hace cada sección.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    // Configuramos un módulo de prueba con el componente Home
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    // Creamos el componente y detectamos cambios iniciales
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verifica que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
