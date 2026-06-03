import type { Product } from "../../types/Product";

const ProductCart = ({cart}: {cart: Product[]}) => {
  if (cart.length === 0) return <div>Your cart is empty</div>

  return (
    <div>
      <h3>Items in Cart:</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - ${item.price.toFixed(2)}
        </div>
      ))}
    </div>
  )
}

export default ProductCart