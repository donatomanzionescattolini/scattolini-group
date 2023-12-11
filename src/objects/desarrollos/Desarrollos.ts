import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import Alba from "./Homestead/Alba.tsx";
import Nexo from "./MiamiBeach/Nexo.tsx";
import Ella from "./MiamiBeach/Ella.tsx";
import FivePark from "./MiamiBeach/FivePark.tsx";
import OnePark from "./MiamiBeach/OnePark.tsx";
import SeventyTwoPark from "./MiamiBeach/SeventyTwoPark.tsx";
import ShomaBay from "./NorthBayVillage/ShomaBay.tsx";
import Centris from "./Pinecrest/Centris.tsx";
import PinelandRocklandEstates from "./Pinecrest/PinelandRocklandEstates.tsx";
import PineParkVillas from "./Pinecrest/PineParkVillas.tsx";
import BentleyResidences from "./SunnyIsles/BentleyResidences.tsx";
import StRegis from "./SunnyIsles/StRegis.tsx";
import TheMansionsAtAcqualina from "./SunnyIsles/TheMansionsAtAcqualina.tsx";
import TerraSol from "./Homestead/TerraSol.tsx";
import SilverlandEstates from "./Homestead/SilverlandEstates.tsx";
import AriaReserve from "./Edgewater/AriaReserve.tsx";
import MissoniBaia from "./Edgewater/MissoniBaia.tsx";
import TheEditionResidences from "./Edgewater/TheEditionResidences.tsx";
import TheVilla from "./Edgewater/TheVilla.tsx";
import Vida from "./Edgewater/Vida.tsx";
import Oasis from "./Homestead/Oasis.tsx";
import ParcVillas from "./Homestead/ParcVillas.tsx";
import SalernoEstates from "./Homestead/SalernoEstates.tsx";
import SedonaEstates from "./Homestead/SedonaEstates.tsx";
import LaBaia from "./BayHarbor/LaBaia.tsx";
import LaMaré from "./BayHarbor/LaMaré.tsx";
import Origin from "./BayHarbor/Origin.tsx";
import TheWell from "./BayHarbor/TheWell.tsx";
import BaccaratResidences from "./Brickell/BaccaratResidences.tsx";
import Domus from "./Brickell/Domus.tsx";
import FourteenRiverDistrict from "./Brickell/FourteenRiverDistrict.tsx";
import FourteenTwentyEight from "./Brickell/FourteenTwentyEight.tsx";
import Lofty from "./Brickell/Lofty.tsx";
import Ora from "./Brickell/Ora.tsx";
import Vita from "./CoconutGrove/VitaObject.tsx";
import TheAvenue from "./CoralGables/TheAvenue.tsx";
import AstonMartin from "./Downtown/AstonMartin.tsx";
import CasaBella from "./Downtown/CasaBella.tsx";
import Cipriani from "./Downtown/Cipriani.tsx";
import TheElser from "./Downtown/TheElser.tsx";
import W11 from "./Downtown/W11.tsx";
import WaldorfAstoria from "./Downtown/WaldorfAstoria.tsx";
import Brickell from "../areas/Brickell.tsx";
import BayHarbor from "../areas/BayHarbor.tsx";
import CoconutGrove from "../areas/CoconutGrove.tsx";
import Doral from "../areas/Doral.tsx";
import Downtown from "../areas/Downtown.tsx";
import Edgewater from "../areas/Edgewater.tsx";
import Homestead from "../areas/Homestead.tsx";
import ParkSquare from "./Homestead/ParkSquare.tsx";
import MiamiBeach from "../areas/MiamiBeach.tsx";
import NorthBayVillage from "../areas/NorthBayVillage.tsx";
import Pinecrest from "../areas/Pinecrest.tsx";
import SunnyIsles from "../areas/SunnyIsles.tsx";
import CoralGables from "../areas/CoralGables.tsx";
import {Area} from "../../models/areas/Area.tsx";
import Areas from "../areas/Areas.tsx";

interface desarrolloMapItem {
    area: string;
    des: Desarrollo[]
}

export const desarrolloMap: desarrolloMapItem[] = new Array<desarrolloMapItem>();

desarrolloMap.push({area: Brickell().name.trim().toLowerCase(), des: [BaccaratResidences(), Domus(), FourteenRiverDistrict(), FourteenTwentyEight(), Lofty(), Ora]});

desarrolloMap.push({area: BayHarbor().name.trim().toLowerCase(), des: [LaMaré(), LaBaia(), Origin(), TheWell()]});
desarrolloMap.push({area: CoconutGrove().name.trim().toLowerCase(), des: [Vita()]});
desarrolloMap.push({area: Doral().name.trim().toLowerCase(), des: []});
desarrolloMap.push({area: Downtown().name.trim().toLowerCase(), des: [AstonMartin(), CasaBella(), Cipriani(), TheElser(), W11(), WaldorfAstoria()]});
desarrolloMap.push({area: Edgewater().name.trim().toLowerCase(), des: [AriaReserve(), MissoniBaia(), TheEditionResidences(), TheVilla(), Vida()]});
desarrolloMap.push({area: Homestead().name.trim().toLowerCase(), des: [Alba(), Oasis(), ParcVillas(), ParkSquare(), SalernoEstates(), SedonaEstates(), SilverlandEstates(), TerraSol()]});
desarrolloMap.push({area: MiamiBeach().name.trim().toLowerCase(), des: [Ella(), FivePark(), Nexo(), OnePark(), SeventyTwoPark()]});
desarrolloMap.push({area: NorthBayVillage().name.trim().toLowerCase(), des: [ShomaBay()]});
desarrolloMap.push({area: Pinecrest().name.trim().toLowerCase(), des: [Centris(), PinelandRocklandEstates(), PineParkVillas()]});
desarrolloMap.push({area: SunnyIsles().name.trim().toLowerCase(), des: [BentleyResidences(), StRegis(), TheMansionsAtAcqualina()]});

desarrolloMap.push({area: CoralGables().name.trim().toLowerCase(), des: [TheAvenue()]});
desarrolloMap.map(entry => {
    entry.des = entry.des.map(desar => {
            desar.area = Areas().find(a => a.name === entry.area);
            return desar;
        }
    );
    return entry;
});

export function getDesarrollosForArea(area: Area): Desarrollo[] {

    return desarrolloMap.find(mapItem => mapItem.area.toLowerCase().trim() === area.name.trim().toLowerCase()).des;


}
