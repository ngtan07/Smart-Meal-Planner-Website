import { ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ListRecipe from '../../mock/recipeList.json'

const ListSuggest = () => {
    const navigate = useNavigate();
    const hanldeViewAllRecipe = () => {
        navigate("/recipe");
    }

    const listSuggest = ListRecipe.slice(0, 4);
    return (
        <>
            <div className="home-list-suggest">
                <div className="text-suggest">
                    <ChefHat size={35} color="rgba(255, 177, 68, 1)" />
                    <h2>Suggest's today</h2>
                </div>
                <div className="list-recipe">
                    {listSuggest.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="card-recipe card"

                        >
                            <div className="card-image">
                                <img src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className="text-list">
                                <h3>{recipe.name}</h3>
                                <div className="text-small">
                                    <p>{recipe.category}</p>
                                    <p>{recipe.area}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

                <button className="view-recipe-btn btn-w100"
                    onClick={hanldeViewAllRecipe}>
                    <span>View all recipe</span>
                </button>

            </div>
        </>
    )
}

export default ListSuggest