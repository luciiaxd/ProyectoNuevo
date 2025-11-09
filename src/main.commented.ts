// Archivo: main.commented.ts
// Esta es la entrada principal de la aplicación Angular. Aquí se arranca (bootstrap)
// la aplicación principal usando la API de "standalone components" de Angular.

// Importa la función que inicia la aplicación en el navegador
import { bootstrapApplication } from '@angular/platform-browser';
// appConfig contiene la configuración de la aplicación (rutas, providers, etc.)
import { appConfig } from './app/app.config';
// App es el componente raíz de la aplicación (es el que contiene <router-outlet> y la estructura global)
import { App } from './app/app';

// bootstrapApplication inicia la aplicación con el componente raíz y la configuración
bootstrapApplication(App, appConfig)
  // Si hay un error al arrancar, lo mostramos por consola
  .catch((err) => console.error(err));
