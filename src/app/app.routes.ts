import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Perfumes } from './pages/products/secciones/new-product/perfumes/perfumes';
import { Carteras } from './pages/products/secciones/new-product/carteras/carteras';
import { Ropa } from './pages/products/secciones/new-product/ropa/ropa';
import { Zapatos } from './pages/products/secciones/new-product/zapatos/zapatos';
import { Joyas } from './pages/products/secciones/new-product/joyas/joyas';

export const routes: Routes = [
    {
        //
        path: "",component: Home
    },
    {path: `home`, component: Home},
    {path: `about`, component: About},
    {path: `products`, component: Products},
    {path: 'perfumes', component: Perfumes},
    {path: 'carteras', component: Carteras},
    {path: 'ropa', component: Ropa},
    {path: 'zapatos', component: Zapatos},
    {path: 'joyas', component: Joyas}
];
