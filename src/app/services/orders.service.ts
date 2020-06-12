import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'app/entities/order';
import { FakeDB } from './fakedb';

@Injectable()
export class OrdersService {

  listOrders(): Observable<Order[]> {
    return of(FakeDB.orders);
  }

}