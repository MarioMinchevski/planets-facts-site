import { useParams } from "react-router-dom"
import { PlanetNavItem } from "./PlanetNavItem"
import { PlaneNavType } from "../../utils/types"
import { useEffect, useState } from "react"

const planetNavConfig = [
    {
        navItemNum: "01",
        navItemText: "Overview",
        shortText: "Overview"
    },
    {
        navItemNum: "02",
        navItemText: "Internal Structure",
        shortText: "Structure"
    },
    {
        navItemNum: "03",
        navItemText: "Surface Geology",
        shortText: "Geology"
    },
]

export function PlanetNav({ activeSection, setActiveSection }: PlaneNavType) {

    const { name } = useParams()
    const [isMobileView, setIsMobileView] = useState(false)

    const checkScreenSize = () => {
        const screenWidth = window.innerWidth
        setIsMobileView(screenWidth <= 599)
    }

    useEffect(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    return (
        <>
            <ul className={`planet-nav__menu ${name?.toLowerCase()}`}>
                {planetNavConfig.map((el, idx) =>
                    <PlanetNavItem
                        key={`${el.navItemText}-${idx}`}
                        {...el}
                        index={idx}
                        isActive={idx === activeSection}
                        setActiveSection={setActiveSection}
                        isMobileView={isMobileView}
                    />
                )}
            </ul>
        </>
    )
}