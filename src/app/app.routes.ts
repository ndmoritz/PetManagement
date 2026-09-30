import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Pets } from './features/pets/pages/pets';
import { authGuard } from './features/auth/auth.guard';
import { Appointments } from './features/appointments/appointments';
import { Costs } from './features/costs/costs';
import { Settings } from './features/settings/settings';
import { AppLayout } from './layout/app-layout/app-layout';


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
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            {
                path: 'pets',
                component: Pets,
                canActivate: [authGuard]
            },
            {
                path: 'appointments',
                component: Appointments,
                canActivate: [authGuard]
            },
            {
                path: 'costs',
                component: Costs,
                canActivate: [authGuard]
            },
            {
                path: 'settings',
                component: Settings,
                canActivate: [authGuard]
            }
        ]
    },
];
