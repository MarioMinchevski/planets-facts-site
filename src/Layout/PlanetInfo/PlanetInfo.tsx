import { PlanetInfoProps } from "../../utils/types";
import { PlanetInfoItem } from "./PlanetInfoItem";

export function PlanetInfo({ infoItems }: PlanetInfoProps) {

    return (
        <div className="planet__info">
            {infoItems.map((el, idx) =>
                <PlanetInfoItem {...el} key={`${el.title}-${idx}`} />
            )}
        </div>
    )
}