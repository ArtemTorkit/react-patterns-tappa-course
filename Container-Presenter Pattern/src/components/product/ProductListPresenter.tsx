import type { Product } from "../../types/Product"
import ErrorMessage from '../common/ErrorMessage'
import ProductListFilters from './ProductListFilters'
import Loader from '../common/Loader'
import ProductCard from './ProductCard'
import ProductCart from './ProductCart'

const ProductListPresenter = ({products, loading, error, sortBy, cart, onSort, onAddToCart}: {products: Product[], loading: boolean, error: Error | null, sortBy: 'asc' | 'desc' | null, cart: Product[], onSort: () => void, onAddToCart: (product: Product )=> void}) => { 
  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error?.message} />
 
  const handleAddToCart = (product: Product) => {
    onAddToCart(product)
  }

  return (
    <div>
      <ProductListFilters onSort={onSort} sortBy={sortBy} />
      <ProductCart cart={cart}/>
      {products.map((product) => 
          <ProductCard product={product} onAddToCart={handleAddToCart} key={product.id} />
      )}
    </div>
  )
}

export default ProductListPresenter