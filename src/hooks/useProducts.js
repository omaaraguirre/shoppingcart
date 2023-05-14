import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    setCategories(['all', ...new Set(products.map((product) => product.category))])
  }, [products])

  return { products, categories }
}

export default useProducts
