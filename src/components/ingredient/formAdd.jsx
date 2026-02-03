const FormIngredient = () => {
    return (
        <div className="form-ingredient">
            <div className="form-title">
                <h3>Add ingredients</h3>
            </div>

            <div className="form-input">
                <div className="r1-input input-ingredient">
                    <input type="text" placeholder="Ingredient name" />
                </div>

                <div className="r2-input input-ingredient">
                    <input className="input-quantity" type="text" placeholder="Quantity" />
                    <input className="input-unit" type="text" placeholder="Unit" />
                </div>

                <div className="form-btn">
                    <button className="btn-add">Add</button>
                    <button className="btn-cancel">Cancel</button>
                </div>
            </div>
        </div>

    )
}

export default FormIngredient;