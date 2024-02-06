import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

import done from '@/assets/done.png'
import { projects } from '@/Components/Routes/projects'
import { ProjectCard } from './Routes/ProjectCard'
import Slider from '../shared/Slider'


export const Portfolio = () => {

    const portfolioRef = useRef(null)
    const isInView = useInView(portfolioRef, { once: true })

    const animation = useAnimation()

    // On place opaque reveal animation
    useEffect(() => {
        animation.start({
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            }
        })
    }, [isInView, animation])

    return (
        <>
        <div className='relative w-full py-6 border-t-[1px] border-b-[1px] border-blue-dark overflow-hidden '>
            {/* To remake using data set and map() */}
            <div className='absolute inset-0 sm:animate-slide 2xs:animate-xslide'>
                <div className='flex justify-between items-center h-full'>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>FULLY RESPONSIVE WEBSITE</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>LONG-TIME PARTNERSHIP</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>WE ACCEPT CRYPTO & STABLECOINS</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>PAGESPEED OPTIMIZED</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>24/7 DEDICATED SUPPORT</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>FULLY RESPONSIVE WEBSITE</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>LONG-TIME PARTNERSHIP</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>WE ACCEPT CRYPTO & STABLECOINS</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>PAGESPEED OPTIMIZED</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>24/7 DEDICATED SUPPORT</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>FULLY RESPONSIVE WEBSITE</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>LONG-TIME PARTNERSHIP</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>WE ACCEPT CRYPTO & STABLECOINS</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>PAGESPEED OPTIMIZED</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>24/7 DEDICATED SUPPORT</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>FULLY RESPONSIVE WEBSITE</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>LONG-TIME PARTNERSHIP</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>WE ACCEPT CRYPTO & STABLECOINS</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>PAGESPEED OPTIMIZED</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                    <div className='flex whitespace-nowrap px-4'>
                        <img src={done} alt="done-icon" className='px-2 py-2' />
                        <p className='text-blue-dark font-medium pt-1'>24/7 DEDICATED SUPPORT</p>
                        <div className='text-blue-dark px-4 pt-1'>&bull;</div>
                    </div>
                </div>
            </div>
        </div>
        <section className='2xs:mx-[1rem] md:mx-[6rem] xl:mx-[16rem] 2xl:mx-[28rem] 3xl:mx-[32rem] my-20 border-b-[1px]'>
            <motion.div 
                className='md:pb-10 2xs:pb-6'
                ref={portfolioRef}
                animate={animation}
            >
                <p className='text-blue-mid font-bold text-lg'>Our work</p>
                <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Discover Our Creative Showcases</h2>
                <p className='text-blue-dark sm:pr-80'>Engage with our portfolio, a collection of projects that reflects our passion for bringing concepts to life. From strategy to design, witness our journey of transforming ideas into tangible realities.</p>
            </motion.div>
            <Slider />
            <div className='md:grid grid-cols-3 gap-3 2xs:hidden'>
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} target='_blank'>
                        <ProjectCard project={project}  />
                    </Link>
                ))}
            </div>
            <div className='flex 2xs:my-10 md:my-20'>
                <a 
                    className='mx-auto bg-blue-dark px-6 py-4 rounded-full hover:bg-blue-dark-opaque transition duration-300'
                    href="https://www.behance.net/cooperdigitalagency" 
                    target='_blank'
                >
                    <span className='text-white'>Discover More Cases</span>
                </a>
            </div>
        </section>
        </>
    )
}

