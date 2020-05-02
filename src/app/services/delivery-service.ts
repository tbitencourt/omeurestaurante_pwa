import { Injectable } from '@angular/core';
import { DeliveryDetails } from 'app/entities/delivery-details';
import { ProductGroup } from 'app/entities/product-group';
import { Observable, of } from 'rxjs';
import { Delivery } from '../entities/delivery';

@Injectable()
export class DeliveryService {

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
            products: [
                { id: 1, name: "Strogonoff de carne", description: "Acompanha arroz branco e batata palha.", price: 12, image: 'strogonoff.png'},
                { id: 2, name: "Salada", description: "Salada verde, legumes e o grelhado do dia (opcional).", price: 12, image: 'salada.png'},
                { id: 3, name: "Feijoada", description: "Feijoada completa (acompanha dose de cachaça artesanal).", price: 15},
                { id: 4, name: "Yakisoba de Ópio", description: "Yakisoba feito na hora (com muito humor! rs).", price: 15}
        ] };

    private snacks: ProductGroup = 
        { title: "Lanches", products: [
            { id: 1, name: "Porção de pão de queijo (12 unids)", description: "", price: 6, image: 'pao-de-queijo.jpg'},
            { id: 2, name: "Açai", description: "Diversos tamanhos e acompanhamentos.", price: 8},
            { id: 3, name: "Salgado + suco do dia", description: "Salgados diversos.", price: 6}
        ] };

    private pizzas: ProductGroup = 
        { title: "Pizzas", products: [
            { id: 1, name: "Mussarela", description: "Mussarela + oregano + molho caseiro", price: 18},
            { id: 2, name: "Calabresa especial", description: "Calabresa + mussarela + cebola, alho e especiarias.", price: 20},
            { id: 3, name: "Camarão", description: "Deliciosos camarões salteados cobertos com mussarela e cebola roxa.", price: 38}
        ] };

    private details: DeliveryDetails[] = [
        {delivery: this.deliveries[0], productGroups: Array().concat(this.lunchs, this.pizzas)},
        {delivery: this.deliveries[1], productGroups: Array().concat(this.pizzas)},
        {delivery: this.deliveries[2], productGroups: Array().concat(this.lunchs)},
        {delivery: this.deliveries[3], productGroups: Array().concat(this.snacks)},
        {delivery: this.deliveries[4], productGroups: Array().concat(this.lunchs, this.snacks)}
    ];

    listAvaiableDeliveries(): Observable<Delivery[]> {
        return of(this.deliveries);
    }

    getDelivery(id: number): Observable<DeliveryDetails> {
        return of(this.details.find(d => d.delivery.id == id));
    }
}