const CartItem = ({ product, addToCart, removeFromCart }) => {
  return (
    <li className='border-b border-zinc-700 py-2 flex items-center gap-2 max-w-sm'>
      <img
        src={product.image}
        alt={product.title}
        className='w-16 h-16 bg-white aspect-square object-contain rounded-xl'
      />
      <div className='flex flex-col justify-between w-full h-full py-2 font-Comfortaa'>
        <p className='text-xs leading-4 line-clamp-2'>{product.title}</p>
        <footer className='flex gap-1 justify-end items-center'>
          <button className='px-2' onClick={removeFromCart}>-</button>
          <span className='text-xs'>Qty: {product.quantity}</span>
          <button className='px-2' onClick={addToCart}>+</button>
        </footer>
      </div>
    </li>
  )
}

export default CartItem
