

export default function SeatTypeItem({ seatType, price, quantity, onQuantityChange}) {
  const options = Array(quantity+1).fill(0).map((_,i) => i)

  return (
    <>
      <div className='col-span-2 border-b border-gray-700 py-3' >
        {seatType}
      </div>
      <div className='text-center border-b border-gray-700 py-3'>
        {price}
        <small className='font-normal'> THB</small> </div>
      <div className='text-center border-b border-gray-700 py-3 font-normal'>
        <select
          className=' bg-black text-white'
          onChange={(e) => onQuantityChange(seatType, e.target.value)}
        >
          {options.map(opt => {
            while( opt <= 15) return <option key={opt} value={opt}>{opt}</option>
          })}
        </select>
      </div>
    </>
  )
}
