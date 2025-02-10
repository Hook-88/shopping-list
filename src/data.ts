import { type ShoppingItemInterface } from './stores/shoppingItems'

export const GROCERYITEMS: ShoppingItemInterface[] = [
  {
    id: '1',
    name: 'Milk',
    quantity: 2,
    unit: 'cartons',
    label: 'Dairy',
  },
  {
    id: '2',
    name: 'Bread',
    quantity: 1,
    unit: 'loaf',
    label: 'Bakery',
  },
  {
    id: '3',
    name: 'Eggs',
    quantity: 12,
    unit: 'count',
    label: 'Dairy',
  },
  {
    id: '4',
    name: 'Chicken',
    quantity: 2,
    unit: 'pounds',
    label: 'Meat',
  },
  {
    id: '5',
    name: 'Apples',
    quantity: 6,
    unit: 'count',
    label: 'Produce',
  },
]
