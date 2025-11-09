// Archivo: products.spec.commented.ts
// Prueba automática (unit test) para el componente Products.
// Las pruebas usan el framework de testing de Angular (TestBed) para crear
// una instancia del componente y comprobar que se crea correctamente.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    // TestBed configura un módulo de pruebas con el componente que queremos testear
    await TestBed.configureTestingModule({
      imports: [Products]
    })
    .compileComponents();

    // Crea el componente en un entorno de pruebas
    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Comprueba que el componente se haya creado (no sea null/undefined)
    expect(component).toBeTruthy();
  });
});
