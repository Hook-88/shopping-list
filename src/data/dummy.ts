interface Item {
  name: string
  id: string
  quantity: number
}

export const GROCERIES: Item[] = [
  {
    name: 'Milk',
    id: 'dairy-01',
    quantity: 1,
  },
  {
    name: 'Bread',
    id: 'bakery-01',
    quantity: 2,
  },
  {
    name: 'Eggs',
    id: 'dairy-02',
    quantity: 12,
  },
  {
    name: 'Bananas',
    id: 'produce-01',
    quantity: 6,
  },
  {
    name: 'Chicken',
    id: 'meat-01',
    quantity: 1,
  },
]
