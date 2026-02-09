
import { useEffect, useState } from "react";
import { getAllRecipe, getRecipeByArea, getRecipeByCategory, getRecipeByName } from "../services/recipe.service";

const useRecipeFilter = () => {

    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState({ search: '', category: 'All', area: 'All' })
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const filterRecipe = async () => {
            setLoading(true)
            let data = []

            try {

                // if input search has value
                if (filter.search) {

                    // get recipe by name
                    const res = await getRecipeByName(filter.search)
                    data = res?.data?.meals || []

                    // if choose filter by category
                    if (filter.category && filter.category !== 'All') {
                        data = data.filter(recipe => recipe.strCategory === filter.category)
                    }

                    // if choose filter by area
                    if (filter.area && filter.area !== 'All') {
                        data = data.filter(recipe => recipe.strArea === filter.area)
                    }

                    // if only choose filter by category, not search
                } else if (filter.category && filter.category !== 'All') {

                    // get recipe by category
                    const res = await getRecipeByCategory(filter.category)
                    data = res?.data?.meals || []

                    // if only choose filter by category, not search
                } else if (filter.area !== 'All') {

                    // get recipe by area
                    const res = await getRecipeByArea(filter.area);
                    data = res?.data?.meals || [];

                    // default
                } else {
                    const res = await getAllRecipe()
                    data = res?.data?.meals || [];
                }

            } catch (error) {
                setRecipes([])
            } finally {
                setLoading(false)
            }

            // update state recipes
            setRecipes(data)
        }

        filterRecipe()


    }, [filter])

    const handleSearch = (value) => setFilter(prev => ({ ...prev, search: value }))
    const handleCategory = (value) => setFilter(prev => ({ ...prev, category: value, area: 'All' }))
    const handleArea = (value) => setFilter(prev => ({ ...prev, area: value, category: 'All' }))

    return {
        recipes,
        filter,
        loading,
        handleArea,
        handleCategory,
        handleSearch
    }
}

export default useRecipeFilter