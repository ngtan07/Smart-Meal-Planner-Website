import { Filter } from "lucide-react"
import ListRecipe from '../../mock/recipeList.json'
import { useEffect, useState } from "react"
import { getAllCategory, getAllCategory2 } from "../../services/recipe.service";

const FilterRecipe = () => {

    const [categories, setCategories] = useState(['All']);
    const [categories2, setCategories2] = useState(['All']);

    useEffect(() => {
        CategoryList();
        CategoryList2()

    }, [])

    const CategoryList = async () => {
        const res = await getAllCategory();
        setCategories(['All', ...new Set(res.map((category) => category.strCategory))])

    }
    const CategoryList2 = async () => {
        const res = await getAllCategory2();
        console.log(res)
        // setCategories2(['All', ...new Set(res.map((category) => category.strCategory))])

    }

    // const areas = ['All', ...new Set(ListRecipe.map((recipe) => recipe.area))]
    const [activeCategory, setActiveCategory] = useState("All");
    // const [activeArea, setActiveArea] = useState("All");

    const handleClickCategory = (category) => {
        setActiveCategory(category);
    }
    // const handleClickArea = (area) => {
    //     setActiveArea(area);
    // }
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

            {/* <div className="filter-item area">
                <p className="filter-label">Area:</p>

                {areas.map((area) => (
                    <button
                        key={area}
                        className={activeArea === area ? 'active' : ''}
                        onClick={() => { handleClickArea(area) }}
                    >{area}
                    </button>
                ))}


            </div> */}

        </div>
    )
}

export default FilterRecipe