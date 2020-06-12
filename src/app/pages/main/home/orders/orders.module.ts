import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrdersComponent } from './orders.component';
import { ComponentsModule } from 'app/components/components.module';

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent
    }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule {}
