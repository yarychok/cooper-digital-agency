import React from 'react'
import partner1 from '@/assets/partner1.png'
import partner2 from '@/assets/partner2.png'
import partner3 from '@/assets/partner3.png'
import partner4 from '@/assets/partner4.png'
import partner5 from '@/assets/partner5.png'
import partner6 from '@/assets/partner6.png'

export const Partners = () => {
    return (
        <section className='mb-20 '>
            <div className='sm:flex justify-between items-center 2xs:grid 2xs:grid-cols-2 sm:px-20 2xs:px-2 sm:py-20 xs:py-10 2xs:py-6 -mt-60 boxShadow bg-white'>
                <div className='flex items-center justify-center'>
                    <img src={partner1} alt="partner1" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={partner2} alt="partner2" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={partner3} alt="partner3" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={partner4} alt="partner4" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={partner5} alt="partner5" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={partner6} alt="partner6" />
                </div>
            </div>
        </section>
        
    )
}

