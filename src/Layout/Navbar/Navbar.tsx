import { useQuery } from "@tanstack/react-query";
import { fetchAllPLanets } from "../../utils/getAllPlanets";
import { NavbarItem } from "./NavbarItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navbarAnimationVariants, navbarMenuVariants } from "../../utils/animationVariants";

export function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const location = useLocation();

    const { data: allPlanets, error, isLoading } = useQuery({
        queryKey: ['planetsData'],
        queryFn: fetchAllPLanets,
    });

    const handleNavVisibility = () => {
        setIsActive((prev) => !prev);
    };

    useEffect(() => {
        setIsActive(false)
    }, [location])

    // handle nav visibility upon screen resize

    useEffect(() => {

        const handleResize = () => {
            const mobileView = window.innerWidth <= 600
            setIsMobile(mobileView)

            if (!mobileView) {
                setIsActive(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (error) return <div>Error loading</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="animate"
                variants={navbarAnimationVariants}
                className="navbar"
            >
                <h1>the planets</h1>

                <AnimatePresence>
                    {(isActive || !isMobile) && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={navbarMenuVariants}
                            className={`navbar__menu ${isActive ? 'active' : ''}`}
                        >
                            {allPlanets?.map((el, idx) => (
                                <NavbarItem key={`${el.name}-${idx}`} {...el} />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
                {isMobile && (
                    <svg
                        onClick={handleNavVisibility}
                        className="hamburger-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="17"
                    >
                        <g>
                            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                        </g>
                    </svg>
                )}
            </motion.nav>
        </>
    );
}
