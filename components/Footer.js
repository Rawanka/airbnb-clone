import React from 'react'

export default function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 
        gap-y-10 px-32 py-10 bg-gray-100 text-gray-800'>
                {/* about */}
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>About</h5>
                    <p>How Airbnb works</p>
                    <p>newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>

                {/* community */}
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>COMMUNITY</h5>
                    <p>Acssibility</p>
                    <p>This is not real site</p>
                    <p>Its a pretty awesome clone</p>
                    <p>Peferrals accepted</p>
                    <p>Airbnb Luxe</p>
                </div>

                {/* Host */}
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>Host</h5>
                    <p>How Airbnb works</p>
                    <p>newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>

                {/* support */}
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold'>SUPPORT</h5>
                    <p>How Airbnb works</p>
                    <p>newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>


        </div>
    )
}
