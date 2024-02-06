import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

function FeatureCard({ image, heading, description, ...props }) {

    const featureRef = useRef(null)
    const isInView = useInView(featureRef, { once: true })

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
            className="border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 2xs:min-h-[350px] md:min-h-fit 2xs:cursor-grab md:cursor-default text-muted-foreground"
            ref={featureRef}
            animate={animation}
        >
            <div>
                <img src={image} alt="about-images" />
            </div>
            <h3 className="border-l-2 border-blue-mid font-semibold leading-4 pl-2 mb-4 mt-6">{heading}</h3>
            <p className="text-blue-dark">{description}</p>
        </motion.div>
    )
}

export default FeatureCard