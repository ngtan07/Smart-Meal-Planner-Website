
import SearchRecipe from "../../components/recipe/search";
import FilterRecipe from "../../components/recipe/filter";
import ListRecipe from "../../components/recipe/list";
import { BookOpen } from "lucide-react";
import '../../styles/recipe.css'

import { Typography } from 'antd';

const { Title, Text } = Typography;

const RecipePage = () => {
    return (
        <div className="recipe-list-page">
            <Title level={4} className="page-title">
                <BookOpen />
                <span>List of recipes</span>
            </Title>

            <SearchRecipe />
            <FilterRecipe />
            <ListRecipe />
        </div>
    )
}

export default RecipePage;