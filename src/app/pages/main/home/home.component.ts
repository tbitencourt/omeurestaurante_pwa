import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [
    {name: "Refúgio dos Piratas", services: ['Refeições', 'Pizzas', 'Petiscos'], rating: 4.9},
    {name: "La Doce Vita", services: ['Refeições'], rating: 4.7},
    {name: "Delícias do Rancho", services: ['Lanches'], rating: 4.5},
    {name: "O Queijão", services: ['Refeições', 'Lanches'], rating: 4.8},
  ];

  constructor() {}

  ngOnInit() {
    
  }

  toServicesFormat(item: any) {
    return Array(item.services).join(" | ");
  }


}
