import { createContext, useReducer } from 'react'
import { CartReducer, CartInitialState } from '../reducers/CartReducer'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, CartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
