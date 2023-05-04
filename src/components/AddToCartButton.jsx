import { useState } from 'react'
import { Cart } from './Icons'

const AddToCartButton = () => {
  const [hover, setHover] = useState(false)
  return (
    <button
      className='absolute bottom-3 right-3 flex items-center gap-1 overflow-hidden'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={`text-sm ${!hover && 'translate-x-16 opacity-0'} transition-all duration-300`}>Add to Cart</span>
      <Cart />
    </button>
  )
}

export default AddToCartButton
