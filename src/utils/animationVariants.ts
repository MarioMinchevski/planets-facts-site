
export const navbarAnimationVariants = {
    hidden: { opacity: 0, y: -50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
}

export const planetInfoVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
}

export const planetsAnimationsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
            ease: "easeInOut",
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const navbarMenuVariants = {
    hidden: {
        opacity: 0,
        y: '-100%',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    exit: {
        opacity: 0,
        y: '-100%',
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}