import '@fontsource-variable/comfortaa'
import '@fontsource-variable/orbitron'
import Header from './components/Header'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import CartProvider from './context/CartContext'
import ProductProvider from './context/ProductContext'

const App = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Header />
          <ShoppingCart />
          <Products />
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
