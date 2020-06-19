import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
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
