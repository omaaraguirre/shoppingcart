import { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 1000
  })

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  useEffect(() => {
    setCategories(['all', ...getExistentCategories()])
    setPriceRange()
  }, [products])

  useEffect(() => {
    setFilteredProducts(filterProducts(products))
  }, [filters])

  const getExistentCategories = () => new Set(products.map(product => product.category))

  const setPriceRange = () => {
    const min = 10 // Math.ceil(Math.min(...products.map(product => product.price)))
    const max = Math.ceil(Math.max(...products.map(product => product.price)))
    setMinPrice(min)
    setMaxPrice(max)
    setFilters({ ...filters, maxPrice: max })
  }

  const filterProducts = products => {
    return products.filter(product => product.price <= filters.maxPrice && (
      filters.category === 'all' || product.category === filters.category
    ))
  }

  return (
    <ProductContext.Provider value={{
      filteredProducts,
      categories,
      minPrice,
      maxPrice,
      filters,
      setFilters
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
