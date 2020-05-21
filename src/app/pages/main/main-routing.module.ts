import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BuyModule } from './home/delivery/buy.module';
import { DetailsModule } from './home/delivery/details.module';
import { ListModule } from './home/delivery/list.module';
import { OrdersModule } from './home/orders/orders.module';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'deliveries',
                children: [
                    {
                        path: '',
                        loadChildren: () => ListModule
                    }
                ],
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: () => OrdersModule
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'deliveries',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
    constructor(private router: Router) { }
}
