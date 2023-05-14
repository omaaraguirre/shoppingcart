import { useState } from 'react'
import { Cart, Trash, Xmark } from './Icons'
import useCart from '../hooks/useCart'
import CartItem from '../components/CartItem'

const ShoppingCart = () => {
  const [open, setOpen] = useState(false)
  const { cart, addToCart, removeFromCart, clearCart } = useCart()

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className='flex justify-center items-center bg-blue-800 rounded-full cursor-pointer w-8 h-8 p-1 fixed right-2 top-2 transition-all duration-300 z-50 hover:scale-110'
      >
        {open ? <Xmark /> : <Cart />}
      </button>

      <aside className={`flex flex-col items-center gap-2 bg-black/90 text-white px-4 py-12 fixed right-0 top-0 w-52 z-40 ${open ? 'h-full opacity-100 translate-x-0' : 'h-0 opacity-0 translate-x-56'} transition-all duration-300`}>
        <ul className='flex flex-col gap-2'>
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
              : <p className='text-center'>Your cart is empty</p>
          }
        </ul>
        <button
          className={`bg-zinc-700 py-1 px-3 rounded-md ${cart.length === 0 && 'hidden'}`}
          onClick={clearCart}
        >
          <Trash />
        </button>
      </aside>
    </>
  )
}

export default ShoppingCart
