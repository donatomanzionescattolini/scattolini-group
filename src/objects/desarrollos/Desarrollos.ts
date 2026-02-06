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
import Vita from "./CoconutGrove/Vita.tsx";
import TheAvenue from "./CoralGables/TheAvenue.tsx";
import AstonMartin from "./Downtown/AstonMartin.tsx";
import CasaBella from "./Downtown/CasaBella.tsx";
import Cipriani from "./Brickell/Cipriani.tsx";
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
import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import OnGrandville from "./Homestead/OnGrandville.tsx";
import FloridaCity from "../areas/FloridaCity.tsx";
import Jem from "./Downtown/Jem.tsx";
import ElleResidences from "./Edgewater/ElleResidences.tsx";
import SouthMiami from "../areas/SouthMiami.tsx";
import FtLauderdale from "../areas/FtLauderdale.tsx";
import MercedesBenzPlacesMiami from "./Brickell/MercedesBenzPlacesMiami.tsx";
import _2200Brickell from "./Brickell/2200Brickell.tsx";
import Wynwood from "../areas/Wynwood.tsx";
import NomadResidences from "./Wynwood/NomadResidences.tsx";
import Aventura from "../areas/Aventura.tsx";
import PembrokePines from "../areas/PembrokePines.tsx";
import Hollywood from "../areas/Hollywood.tsx";
import DaniaBeach from "../areas/DaniaBeach.tsx";
import Palma from "./MiamiBeach/Palma.tsx";
import CoraMerrickPark from "./CoralGables/CoraMerrickPark.tsx";
import PompanoBeach from "../areas/PompanoBeach.tsx";
import WPompanoBeach from "./PompanoBeach/WPompanoBeach.tsx";
import DomusBrickellCenter from "./Brickell/DomusBrickellCenter.tsx";
import IconBeachResidences from "./Hollywood/IconBeachResidences.tsx";
import DolceAndGabbanaResidences from "./Brickell/888BrickellDolceAndGabbanaResidences.tsx";
import EnvyResidence from "./PompanoBeach/EnvyResidence.tsx";
import EdgeHouseResidences from "./Edgewater/EdgeHouseResidences.tsx";
import MidtownMiami from "../areas/MidtownMiami.tsx";
import MidtownParkResidences from "./MidtownMiami/MidtownParkResidences.tsx";
import TheStandardResidences from "./MidtownMiami/TheStandardResidences.tsx";
import JeanGeorgesMiamiTropicResidences from "./MidtownMiami/JeanGeorgesMiamiTropicResidences.tsx";
import TheWilliam from "./MiamiBeach/TheWilliam.tsx";
import SeventyTwoCarlyle from "./MiamiBeach/72Carlyle.tsx";
import TulaResidences from "./NorthBayVillage/TulaResidences.tsx";
import ViceroyBrickell from "./Brickell/ViceroyBrickell.tsx";
import SevenParkResidences from "./Hollywood/SevenParkResidences.tsx";
import GaiaResidences from "./Hollywood/GaiaResidences.tsx";
import FaenaResidences from "./MiamiBeach/FaenaResidences.tsx";

interface DesarrolloMapItem {
  area: Area;
  des: Set<Desarrollo>;
}

export const desarrolloMap: DesarrolloMapItem[] =
  new Array<DesarrolloMapItem>();
desarrolloMap.push({
  area: Wynwood(),
  des: new Set([NomadResidences()]),
});

desarrolloMap.push({
  area: PompanoBeach,
  des: new Set([WPompanoBeach, EnvyResidence]),
});

desarrolloMap.push({ area: PembrokePines(), des: new Set([]) });
desarrolloMap.push({
  area: Aventura(),
  des: new Set([]),
});

desarrolloMap.push({
  area: DaniaBeach(),
  des: new Set([]),
});

desarrolloMap.push({
  area: Hollywood(),
  des: new Set([IconBeachResidences,SevenParkResidences, GaiaResidences]),
});
desarrolloMap.push({
  area: Brickell(),
  des: new Set([
    BaccaratResidences(),
    DomusBrickellCenter,
    Domus(),
    FourteenRiverDistrict(),
    FourteenTwentyEight(),
    Lofty(),
    Ora(),
    Cipriani(),
    MercedesBenzPlacesMiami(),
    _2200Brickell(),
    DolceAndGabbanaResidences,
      ViceroyBrickell
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
    TheElser(),
    W11(),
    WaldorfAstoria(),
    Jem(),
  ]),
});
desarrolloMap.push({
  area: SouthMiami(),
  des: new Set([]),
});
desarrolloMap.push({
  area: Edgewater(),
  des: new Set([
    AriaReserve(),
    MissoniBaia(),
    EditionResidences(),
    TheVilla(),
    VidaResidences(),
    ElleResidences(),
    EdgeHouseResidences,
  ]),
});
desarrolloMap.push({
    area: NorthBayVillage(),
    des:new Set([TulaResidences,ShomaBay()])
});
desarrolloMap.push({
  area: MiamiBeach(),
  des: new Set([
    Ella(),
    FivePark(),
    Nexo(),
    OnePark(),
    SeventyTwoPark(),
    Palma(),
      TheWilliam,
      SeventyTwoCarlyle,
      FaenaResidences
  ]),
});

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
desarrolloMap.push({ area: FtLauderdale(), des: new Set([]) });
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
desarrolloMap.push({
  area: CoralGables(),
  des: new Set([TheAvenue(), CoraMerrickPark]),
});

desarrolloMap.push({area: MidtownMiami,des:new Set([MidtownParkResidences,TheStandardResidences,JeanGeorgesMiamiTropicResidences])});
desarrolloMap.forEach((entry) => {
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
    entry.area.name
      .toLowerCase()
      .trim()
      .includes(area.name.trim().toLowerCase())
  )[0].des;
}
