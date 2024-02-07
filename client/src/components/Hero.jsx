import { useEffect, useRef, useState } from 'react'
import hero from '@/assets/hero.svg'
import { useFormContext } from '@/components/Form/FormContext'
import { animate, motion, useAnimation } from 'framer-motion'

export const Hero = () => {

    // Preloading background slide animation
    const controls = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const [revealing, setIsRevealing] = useState(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
            setIsRevealing(!revealing)
        }, 1400)

        return () => clearTimeout(loadingTimeout)
    }, [])

    useEffect(() => {
        if (!isLoading) {
            controls.start({ x: '100%' })
        }
    }, [isLoading, controls])

    // Preloading text reveal animation
    const cooperRef = useRef()
    const daRef = useRef()

    useEffect(() => {
        animate(
            cooperRef.current,
            {
                opacity: 1,
                y: 0,
            },  
            {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.5,
            }
        )
    }, [])

    useEffect(() => {
        animate(
            daRef.current,
            {
                opacity: 1,
                y: 0,
            },  
            {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.6,
            }
        )
    }, [])

    // Form configuration
    const { isFormVisible, setIsFormVisible } = useFormContext()

    const toggleForm = () => setIsFormVisible(!isFormVisible)

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] sm:pt-20 2xs:pt-10 pb-60'>
            <motion.div
                className={`fixed top-0 right-0 w-full h-[100vh] bg-blue-mid flex items-center justify-center overflow-hidden z-[44] `}
                initial={{ x: '0%' }}
                animate={controls}
                transition={{ duration: 0.7, type: 'tween' }}
            ></motion.div>
            <div className='flex sm:flex-row 2xs:flex-col justify-between items-center w-full overflow-hidden'>
                <div className='flex flex-col sm:w-1/2'>
                    <motion.div 
                        ref={cooperRef} 
                        initial={{ opacity: 0, y: 30, color: 'white'}} 
                        className={`relative z-[45]`}>
                        <h1 className={`text-blue-dark xs:text-7xl 2xs:text-5xl sm:text-right font-bold pb-2 ${revealing ? 'text-blue-dark' : 'text-white'} transition duration-700 ease-in-out tracking-tighter`}>Cooper</h1>
                    </motion.div>
                    <motion.div 
                        ref={daRef} 
                        initial={{ opacity: 0, y: 30, color: 'white'}} 
                        className={`relative z-[45]`}>
                        <h1 className={`text-blue-dark xs:text-6xl 2xs:text-4xl sm:text-right font-bold ${revealing ? 'text-blue-dark' : 'text-white'} transition duration-700 ease-in-out tracking-tighter`}>Digital Agency</h1>
                    </motion.div>
                    <div className='flex w-full sm:py-4 2xs:py-2'>
                        <div className='2xs:w-0 sm:w-1/6 md:w-2/6'></div>
                        <p className='2xs:w-full xs:w-5/6 md:w-4/6 text-blue-dark sm:text-right'>Elevating your business with outstanding digital solutions from Cooper Digital Agency, based in Toronto. Connect with us today to fast-track your success!</p>
                    </div>
                    <div className='flex w-full'>
                        <div className='sm:w-3/5'></div>
                        <button 
                            onClick={toggleForm} 
                            className='2xs:w-4/5 xs:w-2/5 bg-blue-dark 2xs:ml-2 2xs:my-2 xs:m-0 px-4 py-4 rounded-full hover:bg-blue-dark-opaque transition duration-500 cursor-pointer z-10'>
                            <span className='text-center text-white'>Request Quote</span>
                        </button>
                    </div>
                </div>
                <div className='sm:w-1/2 2xs:hidden sm:flex'>
                    <img src={hero} alt="hero" className='w-[90%] bg-cover' />
                </div>
            </div>
        </section>
    )
}