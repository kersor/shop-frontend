import { Product } from "./product"

export interface CreateOrder {
    total: number
    products: CreateOrderProducts[]
}

export interface CreateOrderProducts {
    productId: string
    count: number
    price: number
}

// Тип для продукта в заказе
export interface OrderProduct {
  id: string
  orderId: string
  productId: string
  count: number
  price: number
  product: Product
}

// Тип для заказа
export interface Order {
  id: string
  userId: string
  createdAt: string
  total: number
  products: OrderProduct[]
}