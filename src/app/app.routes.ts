import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';

export const routes: Routes = [
    {
        //
        path: "",component: Home
    },
    {path: `home`, component: Home},
    {path: `about`, component: About},
    {path: `products`, component: Products}
];
