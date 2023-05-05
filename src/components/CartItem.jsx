
const CartItem = ({ product, addToCart, removeFromCart }) => {
  return (
    <li className='border-b border-zinc-700 py-2 flex items-center gap-2 text-md'>
      <img
        src={product.image}
        alt={product.title}
        className='w-16 object-contain'
      />
      <div>
        <p className=' leading-4 line-clamp-2'>{product.title}</p>
        <footer className='flex gap-1 justify-center items-center'>
          <button className='p-2' onClick={removeFromCart}>-</button>
          <span className='text-sm'>Qty: {product.quantity}</span>
          <button className='p-2' onClick={addToCart}>+</button>
        </footer>
      </div>
    </li>
  )
}

export default CartItem
