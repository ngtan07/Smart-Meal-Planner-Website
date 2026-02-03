import FormIngredient from "../../components/ingredient/formAdd";
import ListIngredient from "../../components/ingredient/listIngredient";
import { Package, Plus, Trash2, Edit2, Lightbulb } from 'lucide-react';
import '../../styles/ingredient.css'


const IngredientPage = () => {
    return (
        <div className="ingredient-page child">
            <div className='title-ingredient'>
                <div className="page-title">
                    <Package color="rgba(243, 167, 54, 1)" />
                    <h2>My ingredients</h2>
                </div>
                <button>
                    <Plus size={35} color="white" />
                </button>
            </div>

            <FormIngredient />
            <ListIngredient />
        </div>
    )
}

export default IngredientPage;