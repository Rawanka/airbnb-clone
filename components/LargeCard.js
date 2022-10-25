import React from 'react'
import Image from 'next/image'


export default function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer '>

            <div className='relative h-96 min-w-[300px]'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>

            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p className=''>{description}</p>
                <button className='text-sm bg-gray-800 text-white 
                px-5 py-2 mt-5 rounded-xl shadow-sm hover:scale-105 
                ease-out active:scale-100 transition duration-200
                '>{buttonText}</button>
            </div>
        </section>
    )
}

