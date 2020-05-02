import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'app/services/delivery-service';
import { Delivery } from 'app/entities/delivery';
import { DeliveryHelper } from './delivery-helper';
import { DeliveryDetails } from 'app/entities/delivery-details';
import { Product } from 'app/entities/product';
import { ProductGroup } from 'app/entities/product-group';

@Component({
    selector: 'delivery-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    details: DeliveryDetails;

    constructor(private actRoute: ActivatedRoute,
        private route: Router,
        private deliveryService: DeliveryService) {

        const id = this.actRoute.snapshot.paramMap.get('id');
        this.deliveryService.getDelivery(Number.parseInt(id)).subscribe(r => this.details = r);
    }

    ngOnInit() {

    }

    get delivery(): Delivery {
        return this.details.delivery;
    }

    get groups(): ProductGroup[] {
        return this.details.productGroups;
    }

    toServicesFormat() {
        if (!this.details.delivery)
            return null;
        return DeliveryHelper.showServicesList(this.details.delivery);
    }
}