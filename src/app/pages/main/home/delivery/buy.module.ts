import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BuyComponent } from './buy.component';
import { ComponentsModule } from 'app/components/components.module';
import { DeliveryService } from 'app/services/delivery-service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: ':id', component: BuyComponent }
    ])
  ],
  declarations: [BuyComponent],
  providers: [DeliveryService, HttpClient]
})
export class BuyModule {}
