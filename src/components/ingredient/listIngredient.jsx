import { Trash2, Edit2, Lightbulb } from 'lucide-react';
import NoIngredient from './noIngredient';
const ListIngredient = () => {
    return (
        <>
            <NoIngredient />
            <div className="ingredient-list">
                <div className="ingredient-card">
                    <div className="ingredient-info">
                        <p className='ingredient-name'>Tên nguyên liệu</p>
                        <p className="ingredient-amount">7g</p>
                    </div>
                    <div className='ingredient-actions'>
                        <button className='action-btn edit'>
                            <Edit2 size={20} />
                        </button>
                        <button className='action-btn delete'>
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
                <button className="btn-suggest-meal btn-w100">
                    <Lightbulb size={25} />
                    <span>Suggested dishes using available ingredients</span>
                </button>

            </div>


        </>

    )
}

export default ListIngredient;