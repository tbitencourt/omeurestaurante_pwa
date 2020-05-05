import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ListModule } from './home/delivery/list.module';
import { DetailsModule } from './home/delivery/details.module';
import { BuyModule } from './home/delivery/buy.module';

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
          },
          {
            path: 'details/:id',
            loadChildren: () => DetailsModule
          },
          {
            path: 'buy/:id',
            loadChildren: () => BuyModule
          }
        ]
      },
      {
        path: '',
        redirectTo: '/deliveries',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/deliveries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
