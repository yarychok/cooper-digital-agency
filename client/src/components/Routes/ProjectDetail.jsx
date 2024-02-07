import {Footer} from '@/components/Footer'
import logoNav from '@/assets/logoNav.svg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { projects } from './projects'
import { useFormContext } from '@/components/Form/FormContext'
import ContactForm from '../Form/ContactForm'
import { motion, useAnimation } from 'framer-motion'

export const ProjectDetail = () => {

    // Preloading background slide animation
    const controls = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const [revealing, setIsRevealing] = useState(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
            setIsRevealing(!revealing)
        }, )

        return () => clearTimeout(loadingTimeout)
    }, [])

    useEffect(() => {
        if (!isLoading) {
            controls.start({ y: '100%' })
        }
    }, [isLoading, controls])

    // Projects content handling
    const { projectId } = useParams();

    const project = projects.find((project) => project.id === projectId)

    const { images } = project

    // Form toggling
    const { isFormVisible, setIsFormVisible } = useFormContext()

    const toggleForm = () => setIsFormVisible(!isFormVisible)

    return (
        <>
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] backgroundGradientNavbar overflow-hidden'>
            {/* Slide animation */}
            <motion.div
                className={`fixed top-0 right-0 w-full h-[100vh] bg-blue-mid flex items-center justify-center overflow-hidden z-[44] `}
                initial={{ y: '0%' }}
                animate={controls}
                transition={{ duration: 0.7, type: 'tween' }}
            ></motion.div>
            {/* Navbar */}
            <div className='flex justify-between my-4 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: .2,
                        type: 'spring',
                        bounce: 0.5,
                    }}>
                    <a href="/">
                        <img src={logoNav} alt="logo" className='2xs:w-20 sm:w-[25%] hover:scale-110 transition duration-500 spring' />
                    </a>
                </motion.div>
                <div className='sm:flex 2xs:hidden pt-3 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: .3,
                            type: 'spring',
                            bounce: 0.5,
                        }}
                    >
                        <a href="mailto:hello@cooperdigital.ca" className='px-6 pt-4'>
                            <span className='underlineHover text-blue-mid font-semibold cursor-pointer'>
                                Send us a message
                            </span>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: .3,
                            type: 'spring',
                            bounce: 0.5,
                        }}>
                        <button 
                            className='bg-blue-dark px-6 py-4 rounded-full hover:scale-105 transition duration-500 text-white'
                            onClick={toggleForm}>
                                Send a Request
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* Hero */}
            <div className='my-10 flex flex-col'>
                <motion.div 
                    className='py-2'
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: .2,
                        type: 'spring',
                        bounce: 0.5,
                    }}>
                    <h2 className='text-blue-dark font-semibold text-4xl my-2'>    
                        {project.title}
                    </h2>
                </motion.div>
                <motion.div 
                    className='flex'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: .2,
                        type: 'spring',
                        bounce: 0.5,
                    }}>
                    <aside className='overflow-hidden rounded-md border-b-[3px] border-blue-mid relative z-100'>
                        <img 
                            src={images[0][0]} 
                            alt="project-image"
                            className='object-cover w-full' 
                        />
                    </aside>
                </motion.div>

                {/* Description */}
                <div className='flex 2xs:flex-col sm:flex-row justify-between sm:my-20 2xs:my-10 w-full'>
                    {/* Left side */}
                    <div className='flex flex-col sm:w-2/5'>
                        <h3 className='text-blue-dark font-semibold text-4xl'>Concept</h3>
                        <p className='text-blue-dark font-medium py-4 block'>{project.description.concept}</p>
                    </div>
                    {/* Right side */}
                    <div className='flex flex-col sm:w-2/5 sm:text-right'>
                        <div className='flex flex-col'>
                            <h4 className='text-blue-dark font-semibold text-2xl'>Year</h4>
                            <p className='font-semibold text-gray-500'>
                                {project.description.year}
                            </p>   
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-blue-dark font-semibold text-2xl'>Client</h4>
                            <p className='font-semibold text-gray-500'>
                                {project.description.client}
                            </p>   
                        </div>
                        {/* <div className='flex flex-col'>
                            <h4 className='text-blue-dark font-semibold text-2xl'>Live website</h4>
                            <p className='font-semibold text-gray-500'>
                                {project.description.website}
                            </p>   
                        </div> */}
                    </div>
                </div>
                {/* Images */}
                <div>
                    {images[0].slice(1).map((image, index) => (
                        <img 
                            key={image}
                            src={image}
                            alt={`project-image-${index}`}
                            className='object-cover w-full'
                        />
                    ))}
                </div>
                <div className='flex my-10'>
                    <a 
                        className='mx-auto bg-blue-dark px-6 py-4 rounded-full hover:bg-blue-dark-opaque transition duration-300'
                        href="https://www.behance.net/cooperdigitalagency" 
                        target='_blank'
                    >
                        <span  className='text-white'>Discover More Cases</span>
                    </a>
                </div>
            </div>
        </section>
        <Footer />
        <ContactForm />
        </>
    )
}

