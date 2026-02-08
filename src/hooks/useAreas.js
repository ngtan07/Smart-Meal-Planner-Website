import { useEffect, useState } from "react";
import { getAllArea } from "../services/recipe.service";

const useAreas = () => {

    const [areas, setAreas] = useState(['All']);

    useEffect(() => {
        areaList();
    }, [])


    // get all area
    const areaList = async () => {
        const res = await getAllArea();
        const areaList = res.data.meals;
        setAreas(['All', ...new Set(areaList.map((area) => area.strArea))])
    }

    return { areas }
}

export default useAreas