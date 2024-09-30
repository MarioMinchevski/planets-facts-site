import { Link, useParams } from "react-router-dom";
import { PlanetNavConfingItemType } from "../../utils/types";
import { formatNavItemText } from "../../utils/formatTextFunc";

export function PlanetNavItem({ navItemNum, navItemText, index, isActive, setActiveSection, isMobileView, shortText }: PlanetNavConfingItemType & { index: number, isActive: boolean, setActiveSection: (index: number) => void }) {
    const { name } = useParams()

    const handleClick = () => {
        setActiveSection(index)
    }
    const displayText = isMobileView ? formatNavItemText(shortText) : formatNavItemText(navItemText)

    return (
        <li className={`planet-nav__item ${isActive ? 'active' : ''}`}>
            <Link to={`/planet/${name}/${formatNavItemText(navItemText)}`} onClick={handleClick}>
                <span className="nav-item-num">{navItemNum}</span>
                <span className="nav-item-text">{displayText}</span>
            </Link>
        </li>
    )
}
