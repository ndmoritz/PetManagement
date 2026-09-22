import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Pets } from './features/pets/pages/pets';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },    
    {
        path: 'login',
        component: Login
    },
    {
        path: 'pets',
        component: Pets
    },
    
];
