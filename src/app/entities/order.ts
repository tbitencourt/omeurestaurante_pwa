import { Delivery } from './delivery';
import { YesOrNoOption } from './options';
import { Product } from './product';

export class Order {
  id: number;
  product: Product;
  delivery: Delivery;
  price: number;
  createdDate: Date;

  notes: string;
  requiredOption: string;
  optionalItemns: YesOrNoOption[];
}