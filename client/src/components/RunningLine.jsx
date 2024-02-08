import React from 'react'
import done from '@/assets/done.png'

// How to iterate and render each element from array multiple times? :/
const dataSet = [
    'Fully responsive website',
    'Long-time partnership',
    'We accept crypto & stablecoin',
    'Page speed optimized',
    '24/7 dedicated support',
    'Fully responsive website',
    'Long-time partnership',
    'We accept crypto & stablecoin',
    'Page speed optimized',
    '24/7 dedicated support',
    'Fully responsive website',
    'Long-time partnership',
    'We accept crypto & stablecoin',
    'Page speed optimized',
    '24/7 dedicated support',
]

const RunningLine = () => {
    return (
        <div className='relative w-full py-6 border-t-[1px] border-b-[1px] border-blue-dark overflow-hidden '>
            <div className='absolute inset-0 sm:animate-slide 2xs:animate-xslide'>
                <div className='flex justify-between items-center h-full'>
                    {dataSet.map((data, dataIndex) => (
                        <div key={dataIndex} className='flex whitespace-nowrap px-4'>
                            <img src={done} alt="done-icon" className='px-2 py-2' />
                            <p className='text-blue-dark font-medium pt-1 uppercase'>{data}</p>
                            <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RunningLine