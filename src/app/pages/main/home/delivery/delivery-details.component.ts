import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'delivery-details',
    templateUrl: './delivery-details.component.html',
    styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {

    delivery: any;

    constructor(private actRoute: ActivatedRoute) { }

    ngOnInit() {
        this.actRoute.params.subscribe(params => {
            if (params && params.id) {
                this.delivery = {
                    id: params.id,
                    name: 'Angus Delivery',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    services: ['Refeições', 'Pizzas', 'Petiscos'], 
                };
            }
        });
    }
}
