import FeatureCard from "./FeatureCard"
import feature1 from '@/assets/feature1.png'
import feature2 from '@/assets/feature2.png'
import feature3 from '@/assets/feature3.png'
import feature4 from '@/assets/feature4.png'
import feature5 from '@/assets/feature5.png'
import feature6 from '@/assets/feature6.png'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Feature() {

    const featuresList = [
        {
            id: 1,
            image: feature1,
            heading: 'Web Development',
            description: 'Harness the power of popular programming languages and advanced tools to build dynamic websites that captivate and convert.',
        },
        {
            id: 2,
            image: feature2,
            heading: 'Branding & Graphic Design',
            description: 'Experience the art of branding, design, 3D visualization, and more that leave a lasting impression on your audience.',
        },
        {
            id: 3,
            image: feature3,
            heading: 'Prototyping & UI/UX Design',
            description: 'Embark on a journey of streamlined workflow, prototyping, and user-centric design that brings your vision to life.',
        },
        {
            id: 4,
            image: feature4,
            heading: 'Social Media Marketing',
            description: 'Conquer Instagram, Facebook, TikTok, and beyond with strategic social media management that resonates with your audience.',
        },
        {
            id: 5,
            image: feature5,
            heading: 'Growth Marketing Strategy',
            description: "Navigate the digital landscape with custom marketing strategies that amplify your brand's presence and drive success.",
        },
        {
            id: 6,
            image: feature6,
            heading: 'Content Marketing',
            description: 'Unleash the potential of video and animation, engaging your audience with captivating narratives and creative visuals.',
        },
    ];

    // Slider configuration
    const swiperRef = useRef(null)

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext()
        }
    }

    return (
        <>
            {/* Feature cards slider */}
            <div className="2xs:flex flex-col md:hidden">
                <Swiper 
                    ref={swiperRef}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        }
                    }}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={{ FreeMode, Pagination }}
                    className="max-w-[100%] 2xs:max-h-[700px]">
                        {featuresList.map((feature) => (
                            <SwiperSlide key={feature.id}>
                                <FeatureCard
                                    image={feature.image}
                                    heading={feature.heading}
                                    description={feature.description}
                                    className={' cursor-grab'}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="flex justify-start gap-3 mx-4 pt-4">
                    <FontAwesomeIcon 
                        icon={faCircleArrowLeft} 
                        style={{ color: '#1C1953' }} 
                        className='fa-2x hover:scale-110 transition duration-500 text-muted-foreground cursor-pointer'
                        onClick={handlePrev} />
                    <FontAwesomeIcon 
                        icon={faCircleArrowRight} 
                        style={{ color: '#1C1953' }} 
                        className='fa-2x hover:scale-110 transition duration-500 text-muted-foreground cursor-pointer'
                        onClick={handleNext} />
                </div>
            </div>
            
            {/* Feature cards table */}
            <div className="md:grid grid-cols-3 gap-3 2xs:hidden">
                {featuresList.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        image={feature.image}
                        heading={feature.heading}
                        description={feature.description}
                    />
                ))}
            </div>
        </>
    )
}