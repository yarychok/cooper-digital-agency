import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export const Counter = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} >
            <div className='flex'>
                <div className='flex 2xs:flex-col xs:flex-row justify-between items-center mx-auto sm:gap-32 xs:gap-10 2xs:gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='mx-auto text-blue-dark text-7xl font-bold pb-2'>
                            { counterOn && <CountUp start={0} end={3} duration={2} delay={0}  /> }
                        </h1>
                        <p className='text-blue-dark text-center'>Years of Experience</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='mx-auto text-blue-dark text-7xl font-bold pb-2'>
                            { counterOn && <CountUp start={0} end={72} duration={2} delay={0} /> }
                        </h1>
                        <p className='text-blue-dark text-center'>Projects Completed</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='mx-auto text-blue-dark text-7xl font-bold pb-2'>
                            { counterOn && <CountUp start={0} end={56} duration={2} delay={0} /> }
                        </h1>
                        <p className='text-blue-dark text-center'>Satisfied Clients</p>
                    </div>
                </div>
            </div>

        </ScrollTrigger>
    )
}
