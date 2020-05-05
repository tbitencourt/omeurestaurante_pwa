import { Injectable } from '@angular/core';
import { DeliveryDetails } from 'app/entities/delivery-details';
import { ProductGroup } from 'app/entities/product-group';
import { Observable, of } from 'rxjs';
import { Delivery } from '../entities/delivery';
import { Product } from 'app/entities/product';
import { ProductDetails } from 'app/entities/product-details';
import { FakeDB } from './fakedb';

@Injectable()
export class DeliveryService {
    
    listAvaiableDeliveries(): Observable<Delivery[]> {
        return of(this.deliveries);
    }

    getDelivery(id: number): Observable<DeliveryDetails> {
        return of(this.details.find(d => d.delivery.id == id));
    }

    getProduct(id: number): Observable<ProductDetails> {
        let delivery = this.details.find(dd => dd.productGroups.find(g => g.products.find(p => p.id== id))).delivery;
        let product = this.allProducts.find(g => g.products.find(p => p.id == id)).products.find(p => p.id == id);
        return of({ delivery: delivery, product: product } as ProductDetails);
    }

    /* DADOS FAKE */

    private description: string = 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<p>" + 
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " + 
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    private deliveries: Delivery[] = [
        {id: 1, name: "Angus Delivery", services: ['Refeições', 'Pizzas'], rating: 4.5, description: this.description},
        {id: 2, name: "Refúgio dos Piratas", services: ['Pizzas'], rating: 4.9, description: this.description},
        {id: 3, name: "La Doce Vita", services: ['Refeições'], rating: 4.7, description: this.description},
        {id: 4, name: "Delícias do Rancho", services: ['Lanches'], rating: 4.5, description: this.description},
        {id: 5, name: "O Queijão", services: ['Refeições', 'Lanches'], rating: 4.8, description: this.description},
    ];

    private lunchs: ProductGroup =
        {   title: "Almoços", 
            products:  FakeDB.products.lunchs};

    private snacks: ProductGroup = 
        { title: "Lanches", products: FakeDB.products.snacks };

    private pizzas: ProductGroup = 
        { title: "Pizzas", products: FakeDB.products.pizzas };

    private allProducts: ProductGroup[] = Array().concat(this.lunchs, this.pizzas, this.snacks);

    private details: DeliveryDetails[] = [
        {delivery: this.deliveries[0], productGroups: Array().concat(this.lunchs, this.pizzas)},
        {delivery: this.deliveries[1], productGroups: Array().concat(this.pizzas)},
        {delivery: this.deliveries[2], productGroups: Array().concat(this.lunchs)},
        {delivery: this.deliveries[3], productGroups: Array().concat(this.snacks)},
        {delivery: this.deliveries[4], productGroups: Array().concat(this.lunchs, this.snacks)}
    ];
}