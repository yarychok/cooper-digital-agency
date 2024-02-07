import React, { useState, useRef, useEffect, forwardRef } from 'react'
import { Accordion } from '@/shared/Accordion'
import { useAnimation, useInView, motion } from 'framer-motion';
import { useFormContext } from '@/components/Form/FormContext'

export const Faq = forwardRef(function Faq(props, ref) {

    // Form configuration
    const { isFormVisible, setIsFormVisible } = useFormContext()

    const toggleForm = () => setIsFormVisible(!isFormVisible)

    const [list, setList] = useState([
        {
            heading: 'What services does Cooper Digital Agency offer?',
            description: "Our agency provides a wide array of services including digital marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content creation.",
            active: 1,
        },
        {
            heading: 'How can I start working with Cooper Digital Agency?',
            description: "You can get the ball rolling by contacting us through our website or over the phone. We'll arrange a consultation to discuss your business needs and how we can be of service.",
        },
        
        {
            heading: 'What results can I expect from collaborating with Cooper Digital Agency?',
            description: "Our clients typically experience an increased online visibility, a more powerful brand identity, and business growth. The specific results vary based on your goals and the strategies we implement.",
        },
        {
            heading: 'How does Cooper Digital Agency assist businesses? ',
            description: "Our agency aids businesses in establishing a robust online presence, enhancing their brand identity, and driving growth. Our team of digital marketing professionals employs innovative strategies and customized approaches to meet each client's unique needs.",
        },
        {
            heading: 'What sets Cooper Digital Agency apart from other digital marketing agencies? ',
            description: "Cooper Digital Agency provides bespoke services tailored to the unique requirements of each client. We focus on devising innovative strategies and offering expert guidance, assisting our clients in achieving their business objectives.",
        },
        {
            heading: 'Who are the typical clients of Cooper Digital Agency?',
            description: "We cater to businesses of all types and sizes, from fledgling startups to established corporations. Our clientele spans various industries, including technology companies and retail businesses.",
        },
        {
            heading: "What is the cost of Cooper Digital Agency's services?",
            description: "The cost of our services depends on your specific business needs. We recommend contacting us for a personalized quote.",
        },
    ]);

    // Text block animation
    const textRef = useRef(null)
    const isInView = useInView(textRef, { once: true })
    const animation = useAnimation()

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
        <section className={`2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] 2xl:py-20 lg:pb-6 lg:pt-20 2xs:py-6 transition duration-500 ease-in-out`} ref={ref} >
            <div className='flex 2xs:flex-col sm:flex-row w-full xs:px-4'>
                <motion.div 
                    className='flex flex-col sm:w-1/2'
                    ref={textRef}
                    animate={animation}>
                    <h3 className='font-semibold sm:text-4xl 2xs:text-2xl text-white pb-4'>Frequently Asked Questions</h3>
                    <p className='text-white sm:pb-8 xs:pr-20 '>If you have further questions after reading these, feel free to send us a message or schedule a call.</p>
                    <div className='flex md:flex-row sm:flex-col xs:flex-row 2xs:flex-col sm:my-2 items-baseline 2xs:mt-10 2xs:pb-4'>
                        <button className='px-6 py-4 text-white border-[1px] border-white rounded-full hover:bg-white hover:text-blue-mid transition duration-300' onClick={toggleForm}>
                            Request Quote
                        </button>
                        <button className='my-6 -ml-[10px]'>
                            <a href="https://calendly.com/cooperdigital/introductory-meeting" target='_blank' className='underlined mx-8 py-5 text-white'>Schedule a call</a>
                        </button>
                    </div>
                </motion.div>
                <div className='sm:w-1/2'>
                    {
                        list.map((item, key) => (
                            <Accordion datas={item} key={key} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
})
