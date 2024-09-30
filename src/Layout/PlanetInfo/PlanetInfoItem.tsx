import { planetInfoVariants } from "../../utils/animationVariants";
import { PlanetInfoItemType } from "../../utils/types";
import { motion } from "framer-motion"

export function PlanetInfoItem({ title, value }: PlanetInfoItemType) {
    return (
        <motion.div
            initial="hidden"
            animate="animate"
            variants={planetInfoVariants}
            className="planet__info-item">
            <span className="info__item-title">{title}</span>
            <span className="info__item-text">{value}</span>
        </motion.div>
    )
}