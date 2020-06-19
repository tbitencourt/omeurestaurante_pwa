import { Product } from 'app/entities/product';
import { SelectOption } from 'app/entities/options';
import { Order } from 'app/entities/order';
import { Delivery } from 'app/entities/delivery';

export class FakeDB {
    private static random(limit: number = 1000): number {
        return Math.floor(Math.random()*limit)+1;
    }

    public static products = {
        lunchs:
        [
            {   id: 1, name: "Strogonoff", 
                description: "Acompanha arroz branco e batata palha.", 
                price: 12.99, sale: 10, image: 'strogonoff.png', 
                selectOptions: [{name: "Carne"}, {name: "Frango"}], 
                yesOrNoOptions: [{name: "Feijão"}, {name: "Farofa"}, {name: "Cebola", selected: true}]},
            {   id: 2, name: "Salada", 
                description: "Salada + grelhado do dia (opcional).", 
                price: 12, image: 'salada.png',
                selectOptions: [
                    {name: "Sem grelhado"},
                    {name: "Com grelhado", preCondition: [
                        {name: "Frango", description: "Frango temperado com azeite português e ervas finas."},
                        {name: "Carne", description: "Carne ao molho madeira."},
                        {name: "Peixe", description: "Peixe a dorê."},
                        {name: "Frango assado"},
                        {name: "Carne assada"}
                    ]}
                ],
                yesOrNoOptions: [
                    {name: "Alface"}, {name: "Agrão"}, {name: "Ovo de codorna"}, 
                    {name: "Cenoura cozida"}, {name: "Batata"}, {name: "Azeitona"}
                ]
            },
            { id: 3, name: "Feijoada", description: "Feijoada completa (acompanha dose de cachaça artesanal).", price: 15},
            { id: 4, name: "Yakisoba de Ópio", description: "Yakisoba feito na hora (com muito humor! rs).", price: 15}
        ] as Product[],
        snacks: 
        [
            { id: 5, name: "Porção de pão de queijo (12 unids)", description: "", price: 6, image: 'pao-de-queijo.jpg'},
            { id: 6, name: "Açai", description: "Diversos tamanhos e acompanhamentos.", price: 8},
            { id: 7, name: "Salgado + suco do dia", description: "Salgados diversos.", price: 6}
        ] as Product[],
        pizzas:
        [
            { id: 8, name: "Mussarela", description: "Mussarela + oregano + molho caseiro", price: 18},
            { id: 9, name: "Calabresa especial", description: "Calabresa + mussarela + cebola, alho e especiarias.", price: 20},
            { id: 10, name: "Camarão", description: "Deliciosos camarões salteados cobertos com mussarela e cebola roxa.", price: 38}
        ] as Product[]
    }

    private static description: string = 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<p>" + 
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " + 
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    public static deliveries: Delivery[] = [
      {id: 1, name: "Angus Delivery", services: ['Refeições', 'Pizzas'], rating: 4.5, description: FakeDB.description},
      {id: 2, name: "Refúgio dos Piratas", services: ['Pizzas'], rating: 4.9, description: FakeDB.description},
      {id: 3, name: "La Doce Vita", services: ['Refeições'], rating: 4.7, description: FakeDB.description},
      {id: 4, name: "Delícias do Rancho", services: ['Lanches'], rating: 4.5, description: FakeDB.description},
      {id: 5, name: "O Queijão", services: ['Refeições', 'Lanches'], rating: 4.8, description: FakeDB.description},
    ];

    public static orders: Order[] = [
      {id: 1, product: FakeDB.products.lunchs[0], price: 14.90, delivery: FakeDB.deliveries[0], createdDate: new Date()},
      {id: 2, product: FakeDB.products.lunchs[0], price: 14.90, delivery: FakeDB.deliveries[1], createdDate: new Date()},
      {id: 3, product: FakeDB.products.pizzas[1], price: 19.99, delivery: FakeDB.deliveries[1], createdDate: new Date()},
    ];

}