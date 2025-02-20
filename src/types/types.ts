interface ShoppingItemInterface {
  name: string
  id: string
  quantity: number
  unit: string
  label: string
}

type ItemNoId = Omit<ShoppingItemInterface, 'id'>

export { type ShoppingItemInterface, type ItemNoId }
