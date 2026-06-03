import type {Product} from "../../types/Product"

const ProductCard = ({product, onAddToCart} : {product: Product, onAddToCart: (product: Product) => void}) => {
  return (
    <div style={{border: '1px solid black', marginBottom: '10px', padding: '10px'}}>
      {product.title}
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard