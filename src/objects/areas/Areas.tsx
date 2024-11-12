import {desarrollos} from "../desarrollos/Desarrollos.ts";

export default function Areas() {
    return [...new Set([...desarrollos.values()].map((x) => x.area))];
}
