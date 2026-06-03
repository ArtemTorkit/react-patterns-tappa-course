import { useState, useEffect, useMemo } from "react"
import type { Product } from "../../types/Product"

import ProductListPresenter from "./ProductListPresenter"

const ProductListContainer = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [sortBy, setSortBy] = useState<'asc' | 'desc' | null>(null)
  const [cart, setCart] = useState<Product[]>([])

  const sortedProducts = useMemo(() => {
    return sortBy ? [...products].sort((a, b) => sortBy === 'asc' ? a.price - b.price : b.price - a.price) : products
  }, [products, sortBy])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      const data: Product[] = await response.json()
      setProducts(data)
    } catch (error: Error | unknown) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  const handleSort = () => {
    setSortBy(prev => prev === 'asc' ? 'desc' : 'asc')
  }

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product])
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <ProductListPresenter products={sortedProducts} loading={loading} error={error} sortBy={sortBy} cart={cart} onSort={handleSort} onAddToCart={handleAddToCart} />
  )
}

export default ProductListContainer