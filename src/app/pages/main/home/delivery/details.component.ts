import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'delivery-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    delivery: Delivery = new Delivery();

    constructor(private actRoute: ActivatedRoute, private route: Router) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        /* this.delivery = {
            id: Number.parseInt(id),
            name: 'Angus Delivery',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            services: ['Refeições', 'Pizzas', 'Petiscos']
        }; */
     }

    ngOnInit() {
        
    }
}

class Delivery {
    id: number;
    name: string;
    description: string;
    services: string[];
}