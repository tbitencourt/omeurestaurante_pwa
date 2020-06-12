import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'app/services/orders.service';
import { Order } from 'app/entities/order';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  listOrders: Order[];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.listOrders().subscribe(r => this.listOrders = r);
  }

}