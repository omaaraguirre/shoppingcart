import { useState } from 'react'
import { AddToCart as AddIcon, Cart } from './Icons'
import useCart from '../hooks/useCart'

const AddToCartButton = ({ product }) => {
  const [hover, setHover] = useState(false)
  const { cart, addToCart } = useCart()

  const isInCart = cart.find(item => item.id === product.id)

  return (
    <button
      className='absolute bottom-3 right-3 flex items-center gap-1 overflow-hidden'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => addToCart(product)}
    >
      <span className={`text-sm ${!hover && 'translate-x-16 opacity-0'} transition-all duration-300`}>
        {isInCart ? isInCart.quantity + ' in Cart' : 'Add to Cart'}
      </span>
      {isInCart ? <Cart /> : <AddIcon />}
    </button>
  )
}

export default AddToCartButton
