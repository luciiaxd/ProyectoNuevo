// Archivo: app.config.commented.ts
// Configuración global de la aplicación: aquí se registran proveedores como el enrutador

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // listeners para errores globales del navegador
    provideBrowserGlobalErrorListeners(),
    // mejora el rendimiento del change detection agrupando eventos
    provideZoneChangeDetection({ eventCoalescing: true }),
    // registra las rutas definidas en app.routes
    provideRouter(routes)
  ]
};
