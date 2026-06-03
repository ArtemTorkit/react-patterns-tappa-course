export interface Product {
  id: number
  category: string
  description: number
  image: string
  price: number
  raiting: {
    count: number
    rate: number
  }
  title: string
}