import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => product.price <= filters.maxPrice && (
      filters.category === 'all' || product.category === filters.category
    ))
  }

  return { filters, setFilters, filterProducts }
}

export default useFilters
