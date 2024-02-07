import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { confetti } from '@/animations/confetti'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useForm, Controller } from 'react-hook-form'
import { useFormContext } from '@/components/Form/FormContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, string } from 'zod'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const schema = z.object({
    fullname: string(),
    email: string().email(),
    phone: string().nullish(),
    project: string(),
    about: string(),
})

const data = {
    fullname: '',
    email: '',
    phone: '',
    project: '',
    about: ''
}

export const ContactForm = () => {

    // Phone number validation 0_0
    const [phoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(true)

    // Phone number input styles
    const [isFocused, setIsFocused] = useState(false);
    const handlePhoneNumberFocus = () => setIsFocused(true)
    const handlePhoneNumberBlur = () => setIsFocused(false)

    // Form context
    const { isFormVisible, setIsFormVisible } = useFormContext()

    // Form animation
    const animation = useAnimation()
    const ref = useRef(null)

    useEffect(() => {

        animation.start({
            y: isFormVisible ? '0vh' : '100vh',
            // opacity: isFormVisible ? 1 : 0,
            transition: {
                type: 'ease-in',
                duration: .3,
            }
        })
    }, [isFormVisible, animation])

    // Exit form on button click
    const toggleForm = () => { 
        setIsFormVisible(!isFormVisible)
    } 

    // Exit form on background click
    const handleBackgroundClick = (event) => {
        if ( event.target !== ref.current ) toggleForm()
    }

    // Submit button animation
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Form validation and submit handling
    const { control, handleSubmit, reset } = useForm({ 
        defaultValues: data,
        resolver: zodResolver(schema), 
    })

    const phoneInputStyle = {
        display: 'inline-block',
        width: 'inherit',
        border: '1px solid #ccc',
        padding: '1.1rem 3rem',
        borderRadius: '0.25rem',
        color: '#030712',
        fontSize: '.875rem',
        lineHeight: '1.2grem',
        outline: 'none',
    }

    if (isFocused) {
        phoneInputStyle.boxShadow = '0 0 0 1px #635BFF';
    }

    // Email sending after handling submit
    const handleSave = (formValues) => {
        sendEmail(formValues, toggleForm)
    }

    const sendEmail = (data, callback) => {
        setIsSuccess(false)
        setIsLoading(true)

        axios
            .post(import.meta.env.VITE_API_ENDPOINT, data)
            .then(() => {
                setTimeout(() => {
                    setIsSuccess(true)
                    setIsLoading(false)

                    confetti.start()

                    setTimeout(() => {
                        setIsSuccess(false)
                        confetti.stop()
                        toggleForm()
                    }, 3000)
                }, 1000)
            })
            .catch(() => {
                console.log('Catched error.')
            })
    }

    return (
        <section>
                <motion.div
                    className={`bg-opaque block fixed inset-0 ${isFormVisible ? 'z-50' : 'z-40'} `}
                    onClick={handleBackgroundClick}
                    ref={ref}
                    animate={animation}>
                <div className='flex w-full h-full' ref={ref}>
                    <form className='mx-auto' onSubmit={handleSubmit(handleSave)}>
                        <div 
                        className='bg-white 2xs:w-[100%] xs:w-[400px] sm:w-[600px] 2xs:my-10 2xs:pb-1 xs:px-4 sm:py-8 sm:px-8 border rounded'
                        onClick={(e) => e.stopPropagation()}>
                            <div className='sm:pb-4 2xs:pb-2'>
                                <div className='text-right 2xs:pt-1 sm:pt-0 2xs:pr-2 sm:pr-0'>
                                    <button className=' transition duration-300 hover:text-blue-mid' onClick={toggleForm}>
                                        <FontAwesomeIcon icon={faXmark} className='cursor-pointer' />
                                    </button>
                                </div>
                                <h2 className='text-blue-dark font-semibold sm:text-4xl 2xs:text-3xl sm:mb-2 2xs:mb-1 2xs:px-4 sm:px-0'>Get started!</h2>
                                <p className='text-blue-dark 2xs:text-sm sm:text-base 2xs:px-4 sm:px-0'>Use this form to tell us about your project. <br />
                                We will send you a quote <span className='text-blue-mid'>within 24 hours.</span></p>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col 2xs:px-4 sm:px-0 2xs:pb-2 sm:pb-0'>
                                    <label htmlFor='fullname' className='text-blue-dark text-md'>Full name</label>
                                    <Controller
                                        name='fullname'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text" 
                                                required
                                                placeholder='John Doe'
                                                className='border-[1px] px-3 py-2 rounded border-gray-300 text-gray-950 text-sm sm:mb-4 2xs:mb-1 focus:outline-none  focus:ring-1 ring-blue-mid block'/>
                                            )}/>
                                </div>
                                <div className='flex flex-col 2xs:px-4 sm:px-0 2xs:pb-2 sm:pb-0'>
                                    <label htmlFor='email' className='text-blue-dark text-md'>Email address</label>
                                    <Controller 
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="email" 
                                                required 
                                                placeholder='john.doe@example.com'
                                                className='border-[1px] px-3 py-2 rounded border-gray-300 text-gray-950 text-sm sm:mb-4 2xs:mb-1 focus:outline-none focus:ring-1 ring-blue-mid block'/>
                                        )}/>
                                </div>
                                <div className='flex flex-col 2xs:px-4 sm:px-0 sm:mb-4 2xs:mb-1 2xs:pb-2 sm:pb-0'>
                                    <label htmlFor='phone' className='text-blue-dark text-md'>Phone number</label>
                                        <Controller
                                            name='phone'
                                            control={control}
                                            defaultValue=''
                                            render={ ({ field }) => (
                                                <PhoneInput
                                                    {...field}
                                                    type="text"
                                                    value={phoneNumber}
                                                    placeholder='xxx-xxx-xxxx'
                                                    inputProps={{
                                                        required: true,
                                                    }}
                                                    // country={'ca'}
                                                    inputStyle={phoneInputStyle}
                                                    onFocus={handlePhoneNumberFocus}
                                                    onBlur={handlePhoneNumberBlur}/>
                                            )}
                                        />
                                        {/* {!valid && (
                                            <p>Please enter a valid phone number.</p>
                                        )} */}
                                </div>
                                <div className='flex flex-col 2xs:px-4 sm:px-0 2xs:pb-2 sm:pb-0'>
                                    <label htmlFor='project' className='text-blue-dark text-md'>Project type</label>
                                    <Controller 
                                        name='project'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                required
                                                placeholder='Select one...'
                                                className='border-[1px] px-3 py-2 rounded border-gray-300 text-gray-950 text-sm sm:mb-4 2xs:mb-1 focus:outline-none focus:ring-1 ring-blue-mid block '>
                                                    <option value="" disabled >Select one...</option>
                                                    <option value="web-development" >Web development</option>
                                                    <option value="ui/ux-design">UI/UX Design</option>
                                                    <option value="branding">Branding</option>
                                                    <option value="marketing">Marketing</option>
                                                    <option value="consulting">Consulting</option>
                                            </select>
                                        )}
                                    />
                                </div>
                                <div className='flex flex-col 2xs:px-4 sm:px-0'>
                                    <label htmlFor="about" className='text-blue-dark text-md'>Tell us about your project</label>
                                    <Controller 
                                        name='about'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <textarea
                                                {...field}
                                                required
                                                placeholder='Tell us more about your project, needs and timeline.'
                                                className='border-[1px] px-3 py-2 rounded border-gray-300 text-gray-950 text-sm sm:mb-4 2xs:mb-1 sm:h-36 2xs:h-16 focus:outline-none focus:ring-1 ring-blue-mid block'/>
                                        )}/>
                                </div>
                                <div className='flex flex-col 2xs:px-4 sm:px-0'>
                                    <button type='submit' className={`mx-2 2xs:my-4 sm:mb-0 bg-blue-dark sm:px-6 sm:py-4 2xs:px-4 2xs:py-3 rounded-full text-white hover:bg-blue-dark-opaque transition duration-500
                                        ${ isLoading 
                                            ? 'text-opacity-70 transform scale-95 animate-pulse'
                                            : isSuccess
                                            ? 'text-opacity-100 transform scale-105'
                                            : 'text-opacity-100 transform scale-100'
                                        }
                                    `} >
                                        { isLoading ? 'Sending' : isSuccess ? 'Thank you!' : 'Submit your request'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
        
    )
}

export default ContactForm