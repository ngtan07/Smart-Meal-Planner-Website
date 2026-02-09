
import RecipeSearch from "../../components/recipe/recipe-list-all/RecipeSearch";
import RecipeFilter from "../../components/recipe/recipe-list-all/RecipeFilter";
import RecipeList from "../../components/recipe/recipe-list-all/RecipeList";
import { BookOpen } from "lucide-react";
import '../../styles/recipe.css'

import { Typography } from 'antd';
import useRecipeFilter from "../../hooks/useRecipeFilter";

const { Title } = Typography;

const RecipePage = () => {

    const { recipes, filter, loading, handleArea, handleCategory, handleSearch } = useRecipeFilter()

    return (
        <div className="recipe-list-page">
            <Title level={4} className="page-title">
                <BookOpen />
                <span>List of recipes</span>
            </Title>

            <RecipeSearch
                filter={filter}
                handleSearch={handleSearch} />
            <RecipeFilter
                filter={filter}
                handleCategory={handleCategory}
                handleArea={handleArea} />
            <RecipeList
                recipes={recipes}
                loading={loading}
            />
        </div>
    )
}

export default RecipePage;