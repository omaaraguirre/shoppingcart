import Filters from './Filters'
import { ShoppingBag } from './Icons'

const Header = () => {
  return (
    <header className='flex flex-col gap-5 mb-5 text-white text-center w-11/12 max-w-7xl mx-auto'>
      <h1 className='text-3xl w-fit mx-auto flex gap-2 items-center'>
        <ShoppingBag />
        Fake Shop
      </h1>
      <Filters />
    </header>
  )
}

export default Header
