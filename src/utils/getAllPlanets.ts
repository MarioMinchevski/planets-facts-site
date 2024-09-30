import { PlanetType } from "./types"

export async function fetchAllPLanets(): Promise<PlanetType[]> {
    const res = await fetch('/data.json')

    if (!res.ok) {
        throw new Error('Something went wrong, try again')
    }

    const data: PlanetType[] = await res.json()
    return data
}
