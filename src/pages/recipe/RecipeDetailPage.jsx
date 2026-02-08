import '../../styles/recipeDetail.css'

import RecipeDetailImage from '../../components/recipe/recipe-detail/RecipeDetailImage';
import RecipeDetailIngredient from '../../components/recipe/recipe-detail/RecipeDetailIngredient';
import RecipeDetailStep from '../../components/recipe/recipe-detail/RecipeDetailStep';
import { useParams } from 'react-router-dom';
import { getRecipeDetailById } from '../../services/recipe.service';
import { useEffect, useState } from 'react';



const RecipeDetailPage = () => {

    const { id } = useParams();
    const [recipeDetail, setRecipeDetail] = useState('');

    useEffect(() => {
        RecipeDetail()
    }, [])

    // get recipe detail by id
    const RecipeDetail = async () => {
        const res = await getRecipeDetailById(`${id}`);
        setRecipeDetail(res.data.meals[0])
    }
    return (
        <>
            <RecipeDetailImage recipeDetail={recipeDetail} />
            <RecipeDetailIngredient recipeDetail={recipeDetail} />
            <RecipeDetailStep recipeDetail={recipeDetail} />
        </>
    );
}

export default RecipeDetailPage;
