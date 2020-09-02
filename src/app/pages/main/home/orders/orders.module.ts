import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'app/components/components.module';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent
    }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatTabsModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule {}
