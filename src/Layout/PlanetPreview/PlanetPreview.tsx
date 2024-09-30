import { useLocation, useParams } from "react-router-dom";
import { PlanetPreviewType } from "../../utils/types";
import { motion } from "framer-motion"
import { planetsAnimationsVariants } from "../../utils/animationVariants";

export function PlanetPreview({ images }: PlanetPreviewType) {
    const { planet, geology, internal } = images
    const { name } = useParams()
    const location = useLocation()
    const currentLocation = location.pathname

    const isInternalActive = currentLocation.includes('internal-structure')
    const isGeologyActive = currentLocation.includes('surface-geology')

    return (
        <>
            <div className={`planet-preview-image-box ${name?.toLowerCase()}`}>
                <img src={planet} alt="planet-image" />
                {isInternalActive && <motion.img
                    initial="hidden"
                    animate="animate"
                    variants={planetsAnimationsVariants}
                    className="internal-img" src={internal} alt="internal-image" />}
                {isGeologyActive && <motion.img
                    initial="hidden"
                    animate="animate"
                    variants={planetsAnimationsVariants}
                    className="geology-img" src={geology} alt=" geology-image" />}
            </div>
        </>
    )
}   