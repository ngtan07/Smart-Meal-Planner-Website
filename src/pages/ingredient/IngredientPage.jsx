import FormIngredient from "../../components/ingredient/formAdd";
import ListIngredient from "../../components/ingredient/listIngredient";
import { Package, Plus, Trash2, Edit2, Lightbulb } from 'lucide-react';
import '../../styles/ingredient.css'

import { Typography } from 'antd';

const { Title, Text } = Typography;

const IngredientPage = () => {
    return (
        <div className="ingredient-page">
            <div className='title-ingredient'>
                <Title level={4} className="page-title">
                    <Package color="rgba(243, 167, 54, 1)" />
                    <span>My ingredients</span>
                </Title>
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