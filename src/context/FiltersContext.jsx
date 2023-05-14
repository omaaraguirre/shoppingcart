import { createContext, useState } from 'react'

// Consumir el contexto
export const FiltersContext = createContext()

// Proveedor da acceso al contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 1000
  })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
