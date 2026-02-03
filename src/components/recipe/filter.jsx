import { Filter } from "lucide-react"
import ListRecipe from '../../mock/recipeList.json'
import { useState } from "react"

const FilterRecipe = () => {
    const categories = ['All', ...new Set(ListRecipe.map((recipe) => recipe.category))];
    const areas = ['All', ...new Set(ListRecipe.map((recipe) => recipe.area))]
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeArea, setActiveArea] = useState("All");

    const handleClickCategory = (category) => {
        setActiveCategory(category);
    }
    const handleClickArea = (area) => {
        setActiveArea(area);
    }

    return (
        <div className="filter-recipe">
            <div className="text-filter">
                <Filter size={20} />
                <p>Filter by:</p>
            </div>

            <div className="filter-item category">
                <p className="filter-label">Category:</p>

                {categories.map((category) => (
                    <button
                        key={category}
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => { handleClickCategory(category) }}
                    >{category}
                    </button>
                ))}


            </div>

            <div className="filter-item area">
                <p className="filter-label">Area:</p>

                {areas.map((area) => (
                    <button
                        key={area}
                        className={activeArea === area ? 'active' : ''}
                        onClick={() => { handleClickArea(area) }}
                    >{area}
                    </button>
                ))}


            </div>

        </div>
    )
}

export default FilterRecipe