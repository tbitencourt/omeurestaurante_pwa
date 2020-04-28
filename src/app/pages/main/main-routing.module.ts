import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
            loadChildren: () => import('./home/delivery/list.module').then(m => m.ListModule)
          },
          {
            path: 'details/:id',
            outlet: 'details',
            loadChildren: () => import('./home/delivery/details.module').then(m => m.DetailsModule)
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
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
