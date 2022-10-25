import React from 'react'
import Image from 'next/image'

export default function SmallCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105
    transform transsition duration-300 ease-out'>
        {/* left */}

        <div className='relative h-80 w-80'>
            <Image
            src={img}
            layout='fill'
            className='rounded-xl'
            />
        </div>

        {/* right */}
        <div className='text-2xl mt-3'>
            <h3>{title}</h3>

        </div>

    </div>
  )
}
