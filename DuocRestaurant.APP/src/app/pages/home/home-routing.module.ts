import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'menu',
                loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
            },
            {
                path: 'reception',
                loadChildren: () => import('../reception/reception.module').then(m => m.ReceptionPageModule)
            },
            {
                path: 'account',
                loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
            },
            {
                path: 'bookings',
                loadChildren: () => import('../bookings/bookings.module').then(m => m.BookingsPageModule)
            },

            {
                path: 'availability',
                loadChildren: () => import('../availability/availability.module').then(m => m.AvailabilityPageModule)
            },
            {
                path: 'supply-request-reception',
                loadChildren: () => import('../supply-request-reception/supply-request-reception.module').then(m => m.SupplyRequestReceptionPageModule)
            },
            {
                path: 'order-list',
                loadChildren: () => import('../order-list/order-list.module').then(m => m.OrderListPageModule)
            },
            {
                path: 'my-purchases',
                loadChildren: () => import('../my-purchases/my-purchases.module').then(m => m.MyPurchasesPageModule)
            },
            {
                path: '**',
                loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomePageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule { }
