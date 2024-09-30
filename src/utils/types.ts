export interface PlanetType {
    name: string
    overview: Overview
    structure: Structure
    geology: Geology
    rotation: string
    revolution: string
    radius: string
    temperature: string
    images: Images
}

export interface Overview {
    content: string
    source: string
}

export interface Structure {
    content: string
    source: string
}

export interface Geology {
    content: string
    source: string
}

export interface Images {
    planet: string
    internal: string
    geology: string
}

export type NavbarItemType = {
    name: string
}

export type PlanetPreviewType = {
    images: Images
}

export type PlanetDescType = {
    name: string
    currentSection?: string
    overview: Overview
    structure: Structure
    geology: Geology

    activeSection: number
    setActiveSection: (idx: number) => void
}

export type PlaneNavType = {
    activeSection: number
    setActiveSection: (idx: number) => void
}

export type PlanetNavConfingType = PlanetNavConfingItemType[]

export type PlanetNavConfingItemType = {
    navItemNum: string
    navItemText: string
    shortText: string
    isMobileView: boolean
}

export type PlanetInfoItemType = {
    title: string
    value: string
}

export type PlanetInfoProps = {
    infoItems: PlanetInfoItemType[]
}