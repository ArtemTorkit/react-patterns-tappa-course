const ProductListFilters = ({onSort, sortBy}: {onSort : () => void, sortBy: 'asc' | 'desc' | null}) => {
  return (
    <div>
      <button onClick={onSort}>Filter by Price ({sortBy?.toUpperCase()})</button>
    </div>
  )
}

export default ProductListFilters