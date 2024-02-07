import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Partners } from '@/components/Partners'
import Feature from './Features/Feature'

export const Features = () => {

    const featuresRef = useRef(null)
    const isInView = useInView(featuresRef, { once: true })

    const animation = useAnimation()

    // On place opaque reveal animation
    useEffect(() => {
        animation.start({
            y: 0,
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            }
        })
    }, [isInView, animation])

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] py-20 bg-[#efeffe] relative z-40' >
            <div>
                <Partners />
            </div>
            <motion.div
                ref={featuresRef} 
                animate={animation}
            >
                <p className='text-blue-mid font-bold text-lg'>By choosing us, you...</p>
                <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Unlock the Full Potential of Your Vision</h2>
                <p className='text-blue-dark md:pb-10 2xs:pb-6 sm:pr-80'>Backed by a portfolio of more than <span className='text-blue-mid font-bold'>70 successfully executed projects</span>, our agency boasts expertise in branding, marketing, and cutting-edge web/app development.</p>
            </motion.div>
            <div>
                <Feature />
            </div>
        </section>
    )
}