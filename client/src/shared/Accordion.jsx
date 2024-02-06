import React, { useState, useRef, useEffect } from "react"
import { useAnimation, useInView, motion } from 'framer-motion';

export const Accordion = (props) => {
    const [item, setItem] = useState(props.datas);

    const handleToggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active : newActive});
    }

    // Accordion items animation
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animation = useAnimation()

    // From the top to the bottom reveal animation
    useEffect(() => {
        if (isInView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 1.2,
                    bounce: 0.5,
                }
            })
        }
        if (!isInView) {
            animation.start({
                y: 50,
                opacity: 0,
            })
        }
        
    }, [isInView, animation])

    return (
        <motion.div 
            className={`sm:w-full xs:w-[420px] m-2 group ${item.active === 1 ? 'is-active' : ''} cursor-pointer bg-blue-dark rounded 2xs:px-4 xs:px-8 py-4 border-[1px] border-blue-mid`} 
            onClick={handleToggleActive}
            ref={ref}
            animate={animation}>
            <div className='flex justify-between group'>
                <h3 className={`text-lg text-white pb-2 ${item.active === 1 ? 'underlineActive' : ''} group-[.is-active]:font-semibold`}>
                    {item.heading}
                </h3>
                <p className='text-right text-2xl w-10 group-[.is-active]:duration-200 text-white'>
                    { item.active ? '-' : '+'}
                </p>
            </div>
            <div className='flex overflow-hidden max-h-0 group-[.is-active]:max-h-[400px] duration-700'>
                <p className="pt-2 w-5/6 text-white text-md">
                    {item.description}
                </p>
            </div>
        </motion.div>
    )
}