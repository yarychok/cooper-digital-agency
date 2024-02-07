import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../components/Routes/projects'
import { ProjectCard } from '../components/Routes/ProjectCard'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Slider = () => {

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
        // Project cards slider
        <div className='2xs:flex flex-col md:hidden'>
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
                className='max-w-[100%] max-h-[700px] '>
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <Link to={`/project/${project.id}`} >
                                <ProjectCard project={project}  />
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className='flex justify-start gap-3 mx-4 pt-3 '>
                <FontAwesomeIcon 
                    icon={faCircleArrowLeft} 
                    style={{ color: '#1C1953' }}
                    className='fa-2x hover:scale-110 transition duration-500 cursor-pointer'
                    onClick={handlePrev} />
                <FontAwesomeIcon 
                    icon={faCircleArrowRight} 
                    style={{ color: '#1C1953' }} 
                    className='fa-2x hover:scale-110 transition duration-500 cursor-pointer' 
                    onClick={handleNext} />
            </div>
        </div>
    )
}

export default Slider