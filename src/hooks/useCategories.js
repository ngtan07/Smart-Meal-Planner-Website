import { useEffect, useState } from "react";
import { getAllCategory } from "../services/recipe.service";

const useCategories = () => {
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        categoryList();
    }, [])

    // get all category
    const categoryList = async () => {
        const res = await getAllCategory();
        const categoryList = res.data.meals;
        setCategories(['All', ...new Set(categoryList.map((category) => category.strCategory))])
    }

    return { categories }
}

export default useCategories