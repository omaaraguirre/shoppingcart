import useFilters from '../hooks/useFilters'
import useProducts from '../hooks/useProducts'

const Filters = () => {
  const { filters, setFilters } = useFilters()
  const { categories } = useProducts()

  const handlePriceChange = (e) => {
    setFilters({ ...filters, maxPrice: e.target.value })
  }
  const handleCategoriesChange = (e) => {
    setFilters({ ...filters, category: e.target.value })
  }

  return (
    <div className='flex flex-col sm:flex-row gap-5 justify-between items-center bg-black/80 p-3'>
      <label className='flex gap-2'>
        Max Price
        <input
          type='range'
          min='0'
          max='1000'
          step='5'
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
        ${filters.maxPrice}
      </label>
      <label className='flex gap-2'>
        Category
        <select
          className='border-b text-center text-black w-36 text-xs'
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
