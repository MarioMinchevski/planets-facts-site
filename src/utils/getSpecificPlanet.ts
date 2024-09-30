import { PlanetType } from "./types";

export async function getSpecificPlanet(name: string): Promise<PlanetType> {
    const res = await fetch('/data.json')

    if (!res.ok) {
        throw new Error('Something went wrong, try again');
    }

    const data: PlanetType[] = await res.json()

    const specificPlanet = data.find(planet => planet.name.toLowerCase() === name.toLowerCase())

    if (!specificPlanet) {
        throw new Error('Planet not found')
    }

    return specificPlanet
}
