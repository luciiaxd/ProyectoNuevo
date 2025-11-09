// Archivo: app.spec.commented.ts
// Pruebas automáticas para el componente principal App. Estas pruebas verifican
// que la aplicación se crea correctamente y que renderiza el título esperado.

import { TestBed } from '@angular/core/testing';
import { App } from './app';


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Esta prueba busca un <h1> con texto que contenga 'Hello, proyectonuevo'.
    // Si cambiaste el título en la plantilla, la prueba debería actualizarse.
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, proyectonuevo');
  });
});
