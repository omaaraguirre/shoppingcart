import Header from './components/Header'
import Products from './components/Products'
import { FiltersProvider } from './context/FiltersContext'

const App = () => {
  return (
    <>
      <FiltersProvider>
        <Header />
        <Products />
      </FiltersProvider>
    </>
  )
}

export default App
