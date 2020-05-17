import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'app/entities/delivery';
import { Product } from 'app/entities/product';
import { ProductDetails } from 'app/entities/product-details';
import { DeliveryService } from 'app/services/delivery-service';
@Component({
    selector: 'buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

    details: ProductDetails;

    productForm: FormGroup;

    private optionalItemnsArray: FormArray;

    constructor(private actRoute: ActivatedRoute,
        private route: Router,
        private deliveryService: DeliveryService,
        private fb: FormBuilder) {

        this.optionalItemnsArray = this.fb.array([]);

        this.productForm = this.fb.group({
            product: null,
            notes: null,
            requiredOption: [null, Validators.required],
            optionalItemns: this.optionalItemnsArray
        });

        const id = this.actRoute.snapshot.paramMap.get('id');
        this.deliveryService.getProduct(Number.parseInt(id)).subscribe(details => {
            let product = details.product;

            if(product.yesOrNoOptions){
                product.yesOrNoOptions.forEach(opt =>
                    this.optionalItemnsArray.push(
                        this.fb.group({
                            [opt.name]: opt.selected
                        })
                    )
                );
            }
            
            this.details = details;
            this.productForm.patchValue({product: product});
        });
    }

    ngOnInit(): void {}

    get delivery(): Delivery {
        return this.details.delivery;
    }

    get product(): Product {
        return this.details.product;
    }

    checkout(){
        console.log(this.productForm.value);
    }

    formIsValid(): boolean {
        return this.productForm.valid;
    }
}
