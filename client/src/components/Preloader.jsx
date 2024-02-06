import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div className='flex w-full preloader'>
            <div className='flex flex-col w-1/2 texts-container'>
                <h1 className='text-blue-dark text-7xl text-right font-bold pb-2'>Cooper</h1>
                <h1 className='text-blue-dark text-6xl text-right font-bold pb-6'>Digital Agency</h1>
            </div>
            <div className='w-1/2'></div>
        </div>
    )
}

export default Preloader