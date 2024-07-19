import React from 'react'

export default function WrestlerSelect({ name, alias, height, weight, signature_move, image_src, description }) {
  return (
    <>
      <div className='PICTURE absolute bottom-0 left-44 h-full -hue-rotate-15 animate'>
        <img src={image_src} className='h-full' alt="" />
      </div>

      <div className='STATS absolute left-12 bottom-36 '>
        <div className='text-xl font-semibold'>
          Height
          <div className='flex items-end gap-1 text-4xl font-bold'>
            {height}
            <div className='text-2xl'>
              cm
            </div>
          </div>
        </div>
        <div className='text-xl font-semibold mt-4'>
          Weight
          <div className='flex items-end gap-1 text-4xl font-bold'>
            {weight}
            <div className='text-2xl'>
              kg
            </div>
          </div>
        </div>
        <div className='text-xl font-semibold mt-4'>
          Signature Moves
          <div className='flex items-end gap-1 text-4xl font-bold'>
            {signature_move}
          </div>
        </div>
      </div>

      <div className='DETAIL absolute w-96 top-7 right-14 text-center'>
        <hr />
        <div className='text-7xl font-bold '>
          {name && name.toUpperCase()}
        </div>
        <div className='font-bold text-lg'>
          {alias && '"'}{alias && alias.toUpperCase()}{alias && '"'}
        </div>
        <hr />
        <div className='mt-4 text-sm text-left indent-8'>
          {description}
        </div>
      </div>
    </>
  )
}
