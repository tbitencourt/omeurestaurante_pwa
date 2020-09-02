import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeliveryHelper } from './delivery-helper';
import { Router } from '@angular/router';
import { Delivery } from 'app/entities/delivery';
import { DeliveryService } from 'app/services/delivery-service';

@Component({
    selector: 'deliveries-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listDeliveries: Delivery[];

    constructor(private route: Router,
        private deliveryService: DeliveryService) {
        this.deliveryService.listAvaiableDeliveries().subscribe(r => this.listDeliveries = r);
    }

    ngOnInit() { }

    toServicesFormat(item: any) {
        return DeliveryHelper.showServicesList(item);
    }

}
