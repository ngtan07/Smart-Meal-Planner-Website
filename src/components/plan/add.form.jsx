
const AddForm = () => {
    return (
        <div className="calendar-add-overlay">
            <div className="calendar-add-box">
                <h3 className="calendar-add-title">Add meal</h3>

                <input
                    className="calendar-add-input"
                    type="text"
                    placeholder="Enter dish name..."
                />

                <div className="calendar-add-actions">
                    <button className="btn btn-cancel">Cancel</button>
                    <button className="btn btn-add">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddForm