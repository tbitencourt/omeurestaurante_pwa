import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DeliveryService } from 'app/services/delivery-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [MainComponent],
  providers: [DeliveryService]
})
export class MainModule {}