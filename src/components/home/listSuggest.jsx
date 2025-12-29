import { ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ListSuggest = () => {
    const navigate = useNavigate();

    const hanldeViewAllRecipe = () => {
        navigate("/recipe");
    }
    return (
        <>
            <div className="home-list-suggest">
                <div className="text-suggest">
                    <ChefHat size={35} color="rgba(255, 177, 68, 1)" />
                    <h2>Suggest's today</h2>
                </div>
                <div>
                    món ăn
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