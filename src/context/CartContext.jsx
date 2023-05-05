import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const index = cart.findIndex(item => item.id === product.id)

    if (index >= 0) {
      const newCart = structuredClone(cart)
      newCart[index].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      { ...product, quantity: 1 }
    ]))
  }

  const removeFromCart = product => {
    const index = cart.findIndex(item => item.id === product.id)

    const newCart = structuredClone(cart)
    newCart[index].quantity -= 1

    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1)
    }

    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
