export const CartInitialState = []

export const CartReducer = (state, action) => {
  const { type, payload: product } = action

  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = product
      const productIndex = state.findIndex(item => item.id === id)

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity++
        return newState
      }

      return [
        ...state,
        { ...product, quantity: 1 }
      ]
    }

    case 'REMOVE_FROM_CART': {
      const index = state.findIndex(item => item.id === product.id)

      const newCart = structuredClone(state)
      newCart[index].quantity -= 1

      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1)
      }

      return newCart
    }

    case 'CLEAR_CART':{
      return []
    }
  }

  return state
}
