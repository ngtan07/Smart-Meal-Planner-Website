import { useEffect, useState } from "react";
import { getAllRecipe } from "../services/recipe.service";

const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeList()
    }, [])

    // get all recipe list
    const recipeList = async () => {
        const res = await getAllRecipe();

        if (res?.data?.meals) {
            setRecipes(res.data.meals)
        }
    }

    return (recipes)
}

export default useRecipes