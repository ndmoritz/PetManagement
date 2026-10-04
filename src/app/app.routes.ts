import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Pets } from './features/pets/pages/pets/pets';
import { authGuard } from './features/auth/auth.guard';
import { Appointments } from './features/appointments/appointments';
import { Costs } from './features/costs/costs';
import { Settings } from './features/settings/settings';
import { AppLayout } from './layout/app-layout/app-layout';
import { CoreData } from './features/pets/pages/core-data/core-data';


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
                canActivate: [authGuard],
                data: {
                    breadcrumb: 'Haustiere'
                }
            },
            {
                path: 'pets/core-data/:id',
                component: CoreData,
                canActivate: [authGuard],
                data: {
                    breadcrumb: 'Stammdaten'
                }
            },
            {
                path: 'appointments',
                component: Appointments,
                canActivate: [authGuard],
                data: {
                    breadcrumb: 'Termine'
                }
            },
            {
                path: 'costs',
                component: Costs,
                canActivate: [authGuard],
                data: {
                    breadcrumb: 'Kosten'
                }
            },
            {
                path: 'settings',
                component: Settings,
                canActivate: [authGuard],
                data: {
                    breadcrumb: 'Einstellungen'
                }
            }
        ]
    },
];
