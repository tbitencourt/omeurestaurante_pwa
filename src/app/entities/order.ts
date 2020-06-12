import { Delivery } from './delivery';
import { Product } from './product';

export class Order {
  id: number;
  product: Product;
  delivery: Delivery;
  price: number;
  createdDate: Date;
}