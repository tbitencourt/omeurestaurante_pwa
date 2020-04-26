import { Component, OnInit } from '@angular/core';
import { DeliveryHelper } from './delivery-helper';

@Component({
  selector: 'deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss']
})
export class DeliveriesListComponent implements OnInit {

  items: any[] = [
    {name: "Refúgio dos Piratas", services: ['Refeições', 'Pizzas', 'Petiscos'], rating: 4.9},
    {name: "La Doce Vita", services: ['Refeições'], rating: 4.7},
    {name: "Delícias do Rancho", services: ['Lanches'], rating: 4.5},
    {name: "O Queijão", services: ['Refeições', 'Lanches'], rating: 4.8},
  ];

  constructor(public helper: DeliveryHelper) {  }

  ngOnInit() { }

}
