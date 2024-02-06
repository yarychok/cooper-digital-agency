import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const ProjectCard = ({ project }) => {

    // Kind of 404 page
    if (!project) {
        return <div>Ooops... Project not found</div>
    }

    // Hooks to animate section in viewport
    const projectRef = useRef(null)
    const isInView = useInView(projectRef, { once: true })

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
            className='group flex flex-col rounded py-2 boxShadow hover:border-blue-mid hover:border-[1px] xs:my-2 md:my-0 2xs:min-h-[350px] md:min-h-fit 2xs:cursor-grab md:cursor-pointer text-muted-foreground'
            ref={projectRef}
            animate={animation}
        >
            <div className='border-b-[3px] border-blue-mid overflow-hidden flex relative rounded-md my-2 mx-4'>
                <img src={project.images[0][0]} alt="project-image" className='w-full h-full rounded-md transition duration-700 group-hover:scale-110' />
                <div className='absolute bg-blue-mid top-0 left-0 w-full h-full opacity-20'></div>
            </div>
            <h3 className='font-bold text-sm leading-4 my-2 mx-4 duration-700 group-hover:text-blue-mid '>{project['card-title']}</h3>
            <div className='flex flex-wrap gap-1 mx-3 md:text-xs sm:text-sm 2xs:text-xs text-blue-mid 2xs:font-medium md:font-semibold'>
                {project.tags.map((tag, index) => (
                    <div key={index} className='flex gap-1'>
                        <div>&bull;</div>
                        <p>{tag}</p>
                    </div>
                ))}
            </div>
            <div className='w-100% h-[1px] lg:my-4 2xs:my-2 mx-4 bg-slate-300'></div>
            <p className='text-blue-dark pb-4 mx-4 truncate'>{project.description.concept}</p>
        </motion.div>
    )
}