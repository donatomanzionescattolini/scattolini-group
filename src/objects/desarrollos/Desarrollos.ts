import Alba from "./FloridaCity/Alba.tsx";
import Nexo from "./MiamiBeach/Nexo.tsx";
import Ella from "./MiamiBeach/Ella.tsx";
import FivePark from "./MiamiBeach/FivePark.tsx";
import OnePark from "./MiamiBeach/OnePark.tsx";
import SeventyTwoPark from "./MiamiBeach/SeventyTwoPark.tsx";
import ShomaBay from "./NorthBayVillage/ShomaBay.tsx";
import Centris from "./Pinecrest/Centris.tsx";
import PineRocklandEstates from "./Pinecrest/PineRocklandEstates.tsx";
import PineParkVillas from "./Pinecrest/PineParkVillas.tsx";
import BentleyResidences from "./SunnyIsles/BentleyResidences.tsx";
import StRegis from "./SunnyIsles/StRegis.tsx";
import TheMansionsAtAcqualina from "./SunnyIsles/TheMansionsAtAcqualina.tsx";
import TerraSol from "./Homestead/TerraSol.tsx";
import SilverlandEstates from "./Homestead/SilverlandEstates.tsx";
import AriaReserve from "./Edgewater/AriaReserve.tsx";
import MissoniBaia from "./Edgewater/MissoniBaia.tsx";
import EditionResidences from "./Edgewater/EditionResidences.tsx";
import TheVilla from "./Edgewater/TheVilla.tsx";
import VidaResidences from "./Edgewater/VidaResidences.tsx";
import Oasis from "./FloridaCity/Oasis.tsx";
import ParcVillas from "./FloridaCity/ParcVillas.tsx";
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
import ParkSquare from "./FloridaCity/ParkSquare.tsx";
import MiamiBeach from "../areas/MiamiBeach.tsx";
import NorthBayVillage from "../areas/NorthBayVillage.tsx";
import Pinecrest from "../areas/Pinecrest.tsx";
import SunnyIsles from "../areas/SunnyIsles.tsx";
import CoralGables from "../areas/CoralGables.tsx";
import { Area } from "../../models/areas/Area.tsx";
import Areas from "../areas/Areas.tsx";
import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import OnGrandville from "./Homestead/OnGrandville.tsx";
import FloridaCity from "../areas/FloridaCity.tsx";
import Jem from "./Downtown/Jem.tsx";
import ElleResidences from "./Edgewater/ElleResidences.tsx";
import SouthMiami from "../areas/SouthMiami.tsx";
import SomiWalk from "./SouthMiami/SomiWalk.tsx";
import FtLauderdale from "../areas/FtLauderdale.tsx";
import NatiivoFtLauderdale from "./FtLauderdale/NattivoFtLauderdale.tsx";
import MercedesBenzPlacesMiami from "./Brickell/MercedesBenzPlacesMiami.tsx";
import _2200Brickell from "./Brickell/2200Brickell.tsx";
import Wynwood from "../areas/Wynwood.tsx";
import NomadResidences from "./Wynwood/NomadResidences.tsx";
import Aventura from "../areas/Aventura.tsx";
import PembrokePines from "../areas/PembrokePines.tsx";
import Hollywood from "../areas/Hollywood.tsx";
import DaniaBeach from "../areas/DaniaBeach.tsx";
import Atlantica from "./DaniaBeach/Atlantica.tsx";
import Palma from "./MiamiBeach/Palma.tsx";
import CoraMerrickPark from "./CoralGables/CoraMerrickPark.tsx";
import PompanoBeach from "../areas/PompanoBeach.tsx";
import WPompanoBeach from "./PompanoBeach/WPompanoBeach.tsx";

interface desarrolloMapItem {
  area: Area;
  des: Set<Desarrollo>;
}

export const desarrolloMap: desarrolloMapItem[] =
  new Array<desarrolloMapItem>();
desarrolloMap.push({
  area: Wynwood(),
  des: new Set([NomadResidences()])
})


desarrolloMap.push({
  area: PompanoBeach,
  des: new Set([WPompanoBeach])
})

desarrolloMap.push({
  area: Hollywood(),
  des: new Set([])
})
desarrolloMap.push({ area: PembrokePines(), des: new Set([]) })
desarrolloMap.push({
  area: Aventura(),
  des: new Set([

  ]
  )
})

desarrolloMap.push({
  area: DaniaBeach(),
  des: new Set([Atlantica()])

})


desarrolloMap.push({
  area: Hollywood(),
  des: new Set()
})
desarrolloMap.push({
  area: Brickell(),
  des: new Set([
    BaccaratResidences(),
    Domus(),
    FourteenRiverDistrict(),
    FourteenTwentyEight(),
    Lofty(),
    Ora(),
    MercedesBenzPlacesMiami(),
    _2200Brickell()
  ]),
});

desarrolloMap.push({
  area: BayHarbor(),
  des: new Set([LaMaré(), LaBaia(), Origin(), TheWell()]),
});
desarrolloMap.push({ area: CoconutGrove(), des: new Set([Vita()]) });
desarrolloMap.push({ area: Doral(), des: new Set([]) });
desarrolloMap.push({
  area: Downtown(),
  des: new Set([
    AstonMartin(),
    CasaBella(),
    Cipriani(),
    TheElser(),
    W11(),
    WaldorfAstoria(),
    Jem(),
  ]),
});
desarrolloMap.push({
  area: SouthMiami(),
  des: new Set([
    SomiWalk(),
  ]),
});
desarrolloMap.push({
  area: Edgewater(),
  des: new Set([
    AriaReserve(),
    MissoniBaia(),
    EditionResidences(),
    TheVilla(),
    VidaResidences(),
    ElleResidences()
  ]),
});

desarrolloMap.push({
  area: MiamiBeach(),
  des: new Set([Ella(), FivePark(), Nexo(), OnePark(), SeventyTwoPark(), Palma()]),
});
desarrolloMap.push({ area: NorthBayVillage(), des: new Set([ShomaBay()]) });
desarrolloMap.push({
  area: Pinecrest(),
  des: new Set([Centris(), PineRocklandEstates(), PineParkVillas()]),
});
desarrolloMap.push({
  area: SunnyIsles(),
  des: new Set([BentleyResidences(), StRegis(), TheMansionsAtAcqualina()]),
});

desarrolloMap.push({
  area: FloridaCity(),
  des: new Set([Alba(), Oasis(), ParcVillas(), ParkSquare()]),
});
desarrolloMap.push({ area: FtLauderdale(), des: new Set([NatiivoFtLauderdale()]) });
desarrolloMap.push({
  area: Homestead(),
  des: new Set([
    SalernoEstates(),
    SedonaEstates(),
    SilverlandEstates(),
    TerraSol(),
    OnGrandville(),
  ]),
});
desarrolloMap.push({ area: CoralGables(), des: new Set([TheAvenue(), CoraMerrickPark]) });
desarrolloMap.map((entry) => {
  entry.des = new Set(
    [...entry.des].map((desar) => {
      desar.area = desarrolloMap.find(
        (a) => a.area.name === entry.area.name
      ).area;
      return desar;
    })
  );
  return entry;
});

export function getDesarrollosForArea(area: Area): Set<Desarrollo> {
  return desarrolloMap.filter((entry) =>
    entry.area.name.toLowerCase().trim().includes(area.name.trim().toLowerCase())
  )[0].des;
}
