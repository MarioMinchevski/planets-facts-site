import { Link } from "react-router-dom";
import { NavbarItemType } from "../../utils/types";

export function NavbarItem({ name }: NavbarItemType) {
    return (
        <li className={`navbar__menu-item planet-${name.toLowerCase()}`}>
            <Link to={`/planet/${name}/overview`}>
                {name}
                <span className="mobile-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
                    </svg>
                </span>
            </Link>
        </li>
    );
}
