import {useAtom} from "jotai";
import {bagAtom} from "../../context/atom";

export const useBagAtom = () => {
    const [bagInfo, setBegInfo] = useAtom(bagAtom)

    return {bagInfo, setBegInfo}
};
