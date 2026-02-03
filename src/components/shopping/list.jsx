import { Trash2 } from "lucide-react";

const ListShopping = () => {
    return (
        <>
            <div className="card card-noti-shopping">
                <p><strong>8</strong> items are not bought yet</p>
            </div>
            <h3 className="shopping">Other</h3>
            <div className="ingredient-list">
                <div className="ingredient-card-shopping ingredient-card">
                    <input type="checkbox" name="" id="" />
                    <div className="text-card-shopping ingredient-info">
                        <p className="ingredient-name">Xuong bo</p>
                        <p className="ingredient-amount">1 kg</p>
                    </div>
                    <div className="action-btn delete">
                        <Trash2 />
                    </div>
                </div>
            </div>
            <button className="btn-delete-all btn-w100">
                <span>Delete All</span>
            </button>
        </>
    )
}

export default ListShopping;