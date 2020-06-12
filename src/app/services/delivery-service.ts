import { Injectable } from '@angular/core';
import { DeliveryDetails } from 'app/entities/delivery-details';
import { ProductDetails } from 'app/entities/product-details';
import { ProductGroup } from 'app/entities/product-group';
import { Observable, of } from 'rxjs';
import { Delivery } from '../entities/delivery';
import { FakeDB } from './fakedb';

@Injectable()
export class DeliveryService {
    
    listAvaiableDeliveries(): Observable<Delivery[]> {
        return of(FakeDB.deliveries);
    }

    getDelivery(id: number): Observable<DeliveryDetails> {
        return of(this.details.find(d => d.delivery.id == id));
    }

    getProduct(id: number): Observable<ProductDetails> {
        let delivery = this.details.find(dd => dd.productGroups.find(g => g.products.find(p => p.id== id))).delivery;
        let product = this.allProducts.find(g => g.products.find(p => p.id == id)).products.find(p => p.id == id);
        return of({ delivery: delivery, product: product } as ProductDetails);
    }

    private lunchs: ProductGroup =
        {   title: "Almoços", 
            products:  FakeDB.products.lunchs};

    private snacks: ProductGroup = 
        { title: "Lanches", products: FakeDB.products.snacks };

    private pizzas: ProductGroup = 
        { title: "Pizzas", products: FakeDB.products.pizzas };

    private allProducts: ProductGroup[] = Array().concat(this.lunchs, this.pizzas, this.snacks);

    private details: DeliveryDetails[] = [
        {delivery: FakeDB.deliveries[0], productGroups: Array().concat(this.lunchs, this.pizzas)},
        {delivery: FakeDB.deliveries[1], productGroups: Array().concat(this.pizzas)},
        {delivery: FakeDB.deliveries[2], productGroups: Array().concat(this.lunchs)},
        {delivery: FakeDB.deliveries[3], productGroups: Array().concat(this.snacks)},
        {delivery: FakeDB.deliveries[4], productGroups: Array().concat(this.lunchs, this.snacks)}
    ];
}