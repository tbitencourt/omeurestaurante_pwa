import { Product } from 'app/entities/product';
import { SelectOption } from 'app/entities/options';

export class FakeDB {
    private static random(limit: number = 1000): number {
        return Math.floor(Math.random()*limit)+1;
    }

    public static products = {
        lunchs:
        [
            {   id: FakeDB.random(), name: "Strogonoff", 
                description: "Acompanha arroz branco e batata palha.", 
                price: 12, sale: 10, image: 'strogonoff.png', 
                selectOptions: [{name: "Carne"}, {name: "Frango"}], 
                yesOrNoOptions: [{name: "Feijão"}, {name: "Farofa"}, {name: "Cebola", selected: true}]},
            {   id: FakeDB.random(), name: "Salada", 
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
            { id: FakeDB.random(), name: "Feijoada", description: "Feijoada completa (acompanha dose de cachaça artesanal).", price: 15},
            { id: FakeDB.random(), name: "Yakisoba de Ópio", description: "Yakisoba feito na hora (com muito humor! rs).", price: 15}
        ] as Product[],
        snacks: 
        [
            { id: FakeDB.random(), name: "Porção de pão de queijo (12 unids)", description: "", price: 6, image: 'pao-de-queijo.jpg'},
            { id: FakeDB.random(), name: "Açai", description: "Diversos tamanhos e acompanhamentos.", price: 8},
            { id: FakeDB.random(), name: "Salgado + suco do dia", description: "Salgados diversos.", price: 6}
        ] as Product[],
        pizzas:
        [
            { id: FakeDB.random(), name: "Mussarela", description: "Mussarela + oregano + molho caseiro", price: 18},
            { id: FakeDB.random(), name: "Calabresa especial", description: "Calabresa + mussarela + cebola, alho e especiarias.", price: 20},
            { id: FakeDB.random(), name: "Camarão", description: "Deliciosos camarões salteados cobertos com mussarela e cebola roxa.", price: 38}
        ] as Product[]
    }

}