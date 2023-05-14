import ProductRate from './ProductRate'
import AddToCartButton from './AddToCartButton'
import useProducts from '../hooks/useProducts'
import useFilters from '../hooks/useFilters'

const Products = () => {
  const { filterProducts } = useFilters()
  const { products } = useProducts()

  const filteredProducts = filterProducts(products)

  return (
    <main className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-7xl mx-auto'>
      {
        filteredProducts.map(product => (
          <div
            key={product.id}
            className='flex gap-4 p-3 bg-black/80 rounded-sm text-white relative'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-32 max-h-40 object-contain'
            />
            <div className='flex-1 flex flex-col gap-3 text-xs'>
              <ProductRate rate={product.rating.rate} count={product.rating.count} />
              <div>
                <h3 className='text-lg leading-5 line-clamp-3 mb-1'>{product.title}</h3>
                <p className='uppercase text-gray-500'>{product.category}</p>
              </div>
              <p className='font-bold text-xl'>${product.price}</p>
              <AddToCartButton product={product} />
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default Products
