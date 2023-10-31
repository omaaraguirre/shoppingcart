import useProduct from '../hooks/useProduct'

const Filters = () => {
  const { filteredProducts, categories, minPrice, maxPrice, filters, setFilters } = useProduct()

  const handlePriceChange = e => setFilters({ ...filters, maxPrice: e.target.value })

  const handleCategoriesChange = e => setFilters({ ...filters, category: e.target.value })

  return (
    <div className='flex flex-col sm:flex-row gap-5 justify-between items-center bg-zinc-800 p-3 rounded-xl'>
      <div className='flex flex-col sm:flex-row gap-2 items-center'>
        <label className='flex gap-2'>
          Max Price:
          <input
            type='range'
            min={minPrice}
            max={maxPrice}
            step='10'
            value={filters.maxPrice}
            onChange={handlePriceChange}
          />
          <span className='text-sm font-Orbitron'>
            ${filters.maxPrice}
          </span>
        </label>
        <span className='text-sm text-gray-400'>
          ({filteredProducts.length} products found)
        </span>
      </div>
      <label className='flex gap-2'>
        Category:
        <select
          className='border-b text-center text-black w-36 text-xs rounded-md'
          value={filters.category}
          onChange={handleCategoriesChange}
        >
          {
            categories.map(category => (
              <option key={category} value={category}>{category.toUpperCase()}</option>
            ))
          }
        </select>
      </label>
    </div>
  )
}

export default Filters
