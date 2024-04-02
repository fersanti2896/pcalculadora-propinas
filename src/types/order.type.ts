import { Item } from './item.type';

export type OrderItem = Item & {
    quantity: number
}