import { type ShoppingItemInterface } from '@/stores/shoppingItems'

export const GROCERYITEMS: ShoppingItemInterface[] = [
  {
    name: 'Bananas',
    id: 'fruit-001',
    quantity: 6,
    unit: 'pieces',
    label: 'Fruits',
  },
  {
    name: 'Milk',
    id: 'dairy-001',
    quantity: 1,
    unit: 'liter',
    label: 'Dairy',
  },
  {
    name: 'Bread',
    id: 'bakery-001',
    quantity: 2,
    unit: 'loaves',
    label: 'Bakery',
  },
  {
    name: 'Chicken Breast',
    id: 'meat-001',
    quantity: 500,
    unit: 'grams',
    label: 'Meat',
  },
  {
    name: 'Tomatoes',
    id: 'veg-001',
    quantity: 4,
    unit: 'pieces',
    label: 'Vegetables',
  },
]
