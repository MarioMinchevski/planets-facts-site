import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { getSpecificPlanet } from "../../utils/getSpecificPlanet";
import { validPlanets, validSections } from "../../utils/globalVars";
import { PlanetInfoItemType, PlanetType } from "../../utils/types";
import { PlanetPreview } from "../../Layout/PlanetPreview/PlanetPreview";
import { PlanetDesc } from "../../Layout/PlanetDesc/PlanetDesc";
import { PlanetInfo } from "../../Layout/PlanetInfo/PlanetInfo";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export function PlanetPage() {
    const { name, section } = useParams<{ name: string; section?: string }>()
    const location = useLocation()

    const [activeSection, setActiveSection] = useState(0)

    const currentLocation = location.pathname
    const validPathnames = validSections.map(s => `/planet/${name}/${s}`)

    const { data: specificPlanetData, isLoading, error } = useQuery<PlanetType>({
        queryKey: ['specificPlanetData', name],
        queryFn: () => {
            if (name) {
                return getSpecificPlanet(name)
            }
            throw new Error("Name parameter is missing")
        },
    })

    useEffect(() => {
        const sectionIndex = validSections.indexOf(section || "overview")
        setActiveSection(sectionIndex)
    }, [name, section])

    // edge case to prevenet a user to "mess" with the url in the browser bar and receive unexpected results

    if (!validPlanets.includes(name!)) {
        return <Navigate to="/planet/Mercury/overview" replace />
    }

    if (!validPathnames.includes(currentLocation)) {
        return <Navigate to={`/planet/${name}/overview`} replace />
    }

    const planetInfoConfig: PlanetInfoItemType[] = specificPlanetData ? [
        {
            title: 'Rotation Time',
            value: specificPlanetData.rotation || 'N/A'
        },
        {
            title: 'Revolution Time',
            value: specificPlanetData.revolution || 'N/A'
        },
        {
            title: 'Radius',
            value: specificPlanetData.radius || 'N/A'
        },
        {
            title: 'Temperature',
            value: specificPlanetData.temperature || 'N/A'
        }
    ] : []

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <div className="planet-page">
            <div className="planet-page-main">
                {specificPlanetData && (
                    <AnimatePresence>
                        <PlanetPreview key={name}  {...specificPlanetData} />
                        <div className="planet-overview-info">
                            <PlanetDesc
                                key={`${name}-${section}`}
                                {...specificPlanetData}
                                currentSection={section || "overview"}
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                            />
                        </div>
                    </AnimatePresence>
                )}
            </div>
            <PlanetInfo infoItems={planetInfoConfig} />
        </div>
    )
}
