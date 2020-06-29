import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Delivery } from 'app/entities/delivery';
import { Product } from 'app/entities/product';
import { ProductDetails } from 'app/entities/product-details';
import { DeliveryService } from 'app/services/delivery-service';
import { Order } from 'app/entities/order';

@Component({
    selector: 'buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

    private details: ProductDetails;
    delivery: Delivery;
    product: Product;

    productForm: FormGroup;

    private optionalItemnsArray: FormArray;

    constructor(private actRoute: ActivatedRoute,
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
                product.yesOrNoOptions.forEach((opt, index) =>
                    this.optionalItemnsArray.push(
                        this.fb.group({
                          name: opt.name,
                          selected: opt.selected
                        })
                    )
                );
            }
            
            this.details = details;
            this.product = product;
            this.delivery = details.delivery;

            this.productForm.patchValue({product: product});
        });
    }

    ngOnInit(): void {}

    checkout(){
        let order: Order = this.productForm.value;
        order.createdDate = new Date();
        order.optionalItemns = order.optionalItemns.filter(opt => opt.selected);
        this.deliveryService.whatsapp(order);
        /* this.deliveryService.buy(JSON.stringify(order))
          .subscribe(ok => console.log("Compra realizada = " + ok), 
                    error => console.log("Ocorreu um erro = " + error)); */
    }

    formIsValid(): boolean {
        return this.productForm.valid;
    }
}
