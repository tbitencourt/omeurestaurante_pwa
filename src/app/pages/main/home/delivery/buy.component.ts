
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/entities/product';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'app/services/delivery-service';
import { ProductDetails } from 'app/entities/product-details';
import { Delivery } from 'app/entities/delivery';
@Component({
    selector: 'buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

    details: ProductDetails;

    constructor(private actRoute: ActivatedRoute,
        private route: Router,
        private deliveryService: DeliveryService) {

        const id = this.actRoute.snapshot.paramMap.get('id');
        this.deliveryService.getProduct(Number.parseInt(id)).subscribe(p => this.details = p);
    }

    ngOnInit(): void {}

    get delivery(): Delivery {
        return this.details.delivery;
    }

    get product(): Product {
        return this.details.product;
    }
}
