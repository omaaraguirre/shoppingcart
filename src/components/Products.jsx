import useProduct from '../hooks/useProduct'
import ProductRate from './ProductRate'
import AddToCartButton from './AddToCartButton'

const Products = () => {
  const { filteredProducts } = useProduct()

  return (
    <main className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-7xl mx-auto'>
      {
        filteredProducts.map(product => (
          <div
            key={product.id}
            className='flex gap-4 p-3 bg-zinc-800 rounded-sm text-white relative active:bg-blue-900/30 transition-colors duration-300'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-28 h-28 sm:w-32 sm:h-32 bg-white object-contain rounded-xl'
            />
            <div className='flex-1 flex flex-col gap-1 sm:gap-2 text-xs font-Comfortaa'>
              <ProductRate rate={product.rating.rate} count={product.rating.count} />
              <div className='h-full flex flex-col justify-between'>
                <div>
                  <h3 className='text-sm leading-5 line-clamp-2 sm:line-clamp-3 mb-1'>{product.title}</h3>
                  <p className='uppercase text-gray-500'>{product.category}</p>
                </div>
                <p className='font-bold text-lg font-Orbitron'>${product.price}</p>
              </div>
              <AddToCartButton product={product} />
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default Products
