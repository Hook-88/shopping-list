interface ShoppingItem {
  name: string
  quantity: number
  label: string
}

export const SHOPPINGLIST: ShoppingItem[] = [
  { name: 'Apples', quantity: 6, label: 'Fruits' },
  { name: 'Bananas', quantity: 4, label: 'Fruits' },
  { name: 'Carrots', quantity: 10, label: 'Vegetables' },
  { name: 'Potatoes', quantity: 5, label: 'Vegetables' },
  { name: 'Chicken Breast', quantity: 2, label: 'Meat' },
  { name: 'Milk', quantity: 1, label: 'Dairy' },
  { name: 'Cheddar Cheese', quantity: 1, label: 'Dairy' },
  { name: 'Bread', quantity: 2, label: 'Bakery' },
  { name: 'Eggs', quantity: 12, label: 'Dairy' },
  { name: 'Rice', quantity: 1, label: 'Grains' },
  { name: 'Pasta', quantity: 3, label: 'Grains' },
  { name: 'Tomato Sauce', quantity: 2, label: 'Pantry' },
  { name: 'Olive Oil', quantity: 1, label: 'Pantry' },
  { name: 'Coffee', quantity: 1, label: 'Beverages' },
  { name: 'Orange Juice', quantity: 1, label: 'Beverages' },
]
