import { useState } from "react"

// fake data
const ITEMS_LIST = [
    {name: 'Ear-piercing', price: 200.99},
    {name: 'Basketball sneekers', price: 3549.99},
    {name: 'Headphones', price: 899.99},
    {name: 'Iphone 17 Pro', price: 4899.99},
    {name: 'Festival ticket', price: 1000},
    {name: 'Laser correction', price: 1500},
    {name: 'Sport clothes', price: 500},
    {name: 'Computer', price: 8000},
    {name: 'Stomatolog', price: 5000},
    {name: 'TOOL Concert ticket', price: 1000}
]

export function useCartFacade() {
    const [items, setItems] = useState(ITEMS_LIST);

    const price = items.reduce((acc, item)=>acc+item.price, 0)

    // Mocked discount percentage
    const discountPercentage = 25
    const discount = price * ( discountPercentage / 100 )

    const total = price - discount

    return { items, total, discount };

}