import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeliveriesListComponent } from './deliveries-list.component';
import { DeliveryDetailsComponent } from './delivery/delivery-details.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DeliveriesListComponent },
      { path: 'delivery-details/:id', component: DeliveryDetailsComponent }
    ])
  ],
  declarations: [DeliveriesListComponent, DeliveryDetailsComponent]
})
export class HomeModule {}
