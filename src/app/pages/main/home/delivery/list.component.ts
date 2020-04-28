import { Component, OnInit } from '@angular/core';
import { DeliveryHelper } from './delivery-helper';
import { Router } from '@angular/router';

@Component({
  selector: 'deliveries-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: any[] = [
    {id: 1, name: "Angus Delivery", services: ['Refeições', 'Pizzas', 'Petiscos'], rating: 4.5},
    {id: 2, name: "Refúgio dos Piratas", services: ['Refeições', 'Pizzas', 'Petiscos'], rating: 4.9},
    {id: 3, name: "La Doce Vita", services: ['Refeições'], rating: 4.7},
    {id: 4, name: "Delícias do Rancho", services: ['Lanches'], rating: 4.5},
    {id: 5, name: "O Queijão", services: ['Refeições', 'Lanches'], rating: 4.8},
  ];

  constructor(private route: Router) {  }

  ngOnInit() { }

  toServicesFormat(item: any) {
    return DeliveryHelper.toServicesFormat(item.services);
  }

}
