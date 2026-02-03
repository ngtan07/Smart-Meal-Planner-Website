
import SearchRecipe from "../../components/recipe/search";
import FilterRecipe from "../../components/recipe/filter";
import ListRecipe from "../../components/recipe/list";
import { BookOpen } from "lucide-react";
import '../../styles/recipe.css'

const RecipePage = () => {
    return (
        <div className="recipe-list-page child">
            <div className="page-title">
                <BookOpen color="rgba(243, 167, 54, 1)" />
                <h2>List of recipes</h2>
            </div>

            <SearchRecipe />
            <FilterRecipe />
            <ListRecipe />
        </div>
    )
}

export default RecipePage;