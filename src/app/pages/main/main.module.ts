import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DeliveryService } from 'app/services/delivery-service';
import { OrdersService } from 'app/services/orders.service';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [MainComponent],
  providers: [DeliveryService, OrdersService]
})
export class MainModule {}