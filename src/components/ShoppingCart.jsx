import { useState } from 'react'
import useCart from '../hooks/useCart'
import CartItem from '../components/CartItem'
import { Cart, Xmark } from './Icons'

const ShoppingCart = () => {
  const [open, setOpen] = useState(false)
  const { cart, addToCart, removeFromCart, clearCart } = useCart()

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-center items-center bg-blue-800 rounded-full cursor-pointer ${open ? 'w-6 h-6' : 'w-10 h-10'} p-1 fixed right-4 top-4 transition-all duration-300 z-50 hover:scale-110`}
      >
        {open ? <Xmark /> : <Cart />}
      </button>

      <aside className={`flex flex-col items-center gap-2 bg-black/90 text-white p-4 fixed right-0 top-0 w-80 z-40 ${open ? 'h-screen opacity-100 translate-x-0' : 'h-0 opacity-0 translate-x-56'} transition-all duration-300`}>
        <h2 className='text-xl font-light font-Orbitron'>Shopping Cart</h2>
        <ul className='flex flex-col gap-2 overflow-y-scroll overflow-x-hidden scrollbar'>
          {
            cart.length > 0
              ? (
                  cart.map(product => (
                    <CartItem
                      key={product.id}
                      product={product}
                      addToCart={() => addToCart(product)}
                      removeFromCart={() => removeFromCart(product)}
                    />
                  ))
                )
              : <p className='mt-10 text-center text-sm text-gray-400'>Your cart is empty</p>
          }
        </ul>
        <button
          className={`flex items-center gap-1 border py-1 px-3 rounded-md text-sm ${cart.length === 0 && 'hidden'} hover:text-blue-500 hover:border-blue-500`}
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </aside>
    </>
  )
}

export default ShoppingCart
