import { SelectOption, YesOrNoOption } from './options';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
    sale?: number;

    selectOptions: SelectOption[];
    yesOrNoOptions: YesOrNoOption[];
}