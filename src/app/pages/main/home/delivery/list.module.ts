import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { DetailsModule } from './details.module';
import { BuyModule } from './buy.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeliveryService } from 'app/services/delivery-service';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'details',
                loadChildren: () => DetailsModule
            },
            {
                path: 'buy',
                loadChildren: () => BuyModule
            }
        ]
    }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    declarations: [ListComponent],
    providers: [DeliveryService]
})
export class ListModule { }