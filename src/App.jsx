import Header from './components/Header'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import { CartProvider } from './context/CartContext'
import { FiltersProvider } from './context/FiltersContext'

const App = () => {
  return (
    <>
      <FiltersProvider>
        <CartProvider>
          <Header />
          <ShoppingCart />
          <Products />
        </CartProvider>
      </FiltersProvider>
    </>
  )
}

export default App
