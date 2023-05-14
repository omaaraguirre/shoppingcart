import { EmptyStar, FullStar, HalftStar } from './Icons'

const ProductRate = ({ rate, count }) => {
  const full = Math.floor(rate)
  const half = Math.ceil(rate - full)
  const empty = 5 - full - half
  return (
    <div className='flex gap-1 justify-end items-center'>
      {rate}
      <div className='flex'>
        {[...Array(full)].map((_, i) => <FullStar key={i} />)}
        {half && <HalftStar />}
        {[...Array(empty)].map((_, i) => <EmptyStar key={i} />)}
      </div>
      <span className='text-gray-500'>({count})</span>
    </div>
  )
}

export default ProductRate
