// Archivo: app.routes.commented.ts
// Aquí se definen las rutas de la aplicación: cada ruta asocia una URL con un componente.

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Perfumes } from './pages/products/secciones/new-product/citrico/perfumes';
import { Carteras } from './pages/products/secciones/new-product/forales/carteras';
import { Ropa } from './pages/products/secciones/new-product/amaderados/ropa';
import { Zapatos } from './pages/products/secciones/new-product/verde/zapatos';
import { Joyas } from './pages/products/secciones/new-product/dulces/joyas';
import { CartPage } from './pages/cart/cart';

// routes: arreglo con objetos que indican la ruta (path) y el componente asociado
export const routes: Routes = [
    {
        // ruta raíz (url /) -> componente Home
        path: "",component: Home
    },
    {path: `home`, component: Home},
    {path: `about`, component: About},
    {path: `products`, component: Products},
    {path: 'citrico', component: Perfumes},
    {path: 'forales', component: Carteras},
    {path: 'amaderados', component: Ropa},
    {path: 'verde', component: Zapatos},
    {path: 'dulces', component: Joyas}
    ,{path: 'cart', component: CartPage}
];
