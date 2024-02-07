import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Counter } from '@/shared/Counter'
import process1 from '@/assets/process1.png'
import process2 from '@/assets/process2.png'
import process3 from '@/assets/process3.png'

export const Process = () => {

    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)

    const isInViewFirst = useInView(firstRef, { once: true })
    const isInViewSecond = useInView(secondRef, { once: true })
    const isInViewThird = useInView(thirdRef, { once: true })

    const animationFirst = useAnimation()
    const animationSecond = useAnimation()
    const animationThird = useAnimation()

    // First element animation from left to right
    useEffect(() => {
        if (isInViewFirst) {
            animationFirst.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewFirst) {
            animationFirst.start({
                x: -300,
                opacity: 0,
            })
        }
    }, [isInViewFirst, animationFirst])

    // Second element animation from right to left  
    useEffect(() => {
        if (isInViewSecond) {
            animationSecond.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewSecond) {
            animationSecond.start({
                x: 300,
                opacity: 0,
            })
        }
    }, [isInViewSecond, animationSecond])

    // Third element animation from left to right
    useEffect(() => {
        if (isInViewThird) {
            animationThird.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewThird) {
            animationThird.start({
                x: -300,
                opacity: 0,
            })
        }
    }, [isInViewThird, animationThird])

    const processRef = useRef(null)
    const isInView = useInView(processRef, { once: true })

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
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] backgroundGradient overflow-hidden'>
            <Counter />
            <motion.div 
                className='flex flex-col sm:my-20 2xs:mt-20 2xs:mb-0'
                ref={processRef} 
                animate={animation}
            >
                <p className='text-blue-mid font-bold text-lg sm:mx-auto sm:py-2'>Our process</p>
                <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:mx-auto'>How does it work?</h2>
            </motion.div>
            <div className='flex flex-col'>
                <motion.div 
                    className='flex 2xs:flex-col 2xs:my-10 sm:flex-row sm:my-0 items-center w-full'
                    ref={firstRef}
                    animate={animationFirst}
                >
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Step 01</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Discover & Define</h3>
                            <p className='text-blue-dark'>We kick off by diving into your vision and goals. With a keen focus on your web development needs, we'll understand your business closely, carrying out thorough research and engaging in insightful dialogues to outline the path to your digital triumph.</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2 sm:pl-20'>
                        <img src={process1} alt="process-image" />
                    </div>
                </motion.div>
                <motion.div 
                    className='flex 2xs:flex-col-reverse 2xs:my-10 sm:flex-row items-center w-full'
                    ref={secondRef}
                    animate={animationSecond}
                    >                    
                    <div className='sm:w-1/2'>
                        <img src={process2} alt="process-image" />
                    </div>
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Step 02</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Design & Develop</h3>
                            <p className='text-blue-dark'>Armed with a robust plan, our skilled teams take over. They will design and build your digital solutions, with a prime focus on an engaging and innovative website. We also cater to your needs for branding and targeted marketing campaigns. You're always at the helm, with complete transparency throughout the process.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='flex 2xs:flex-col 2xs:my-10 sm:flex-row items-center w-full'
                    ref={thirdRef}
                    animate={animationThird}
                >
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Step 03</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Deliver & Optimize</h3>
                            <p className='text-blue-dark'>Next is the thrilling part - launching your digital solutions. Our commitment extends beyond just delivery. We pledge to ongoing refinement and enhancement. We'll monitor your digital assets closely, analyzing and improving them to ensure they consistently surpass your expectations.</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2 sm:pl-20'>
                        <img src={process3} alt="process-image" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
