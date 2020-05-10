import { SelectOption, YesOrNoOption } from './options';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;

    selectOptions: SelectOption[];
    yesOrNoOptions: YesOrNoOption[];
}