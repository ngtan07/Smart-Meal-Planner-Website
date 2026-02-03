import ListAllRecipe from '../../mock/recipeList.json'

const ListRecipe = () => {


    return (
        <div className='recipe-list'>
            {ListAllRecipe.map((recipe) => (
                <div className='recipe-card card'
                    key={recipe.id}
                >
                    <div className="card-image-list">
                        <img src={recipe.image} alt={recipe.name} />
                    </div>

                    <h3>{recipe.name}</h3>
                    <div className="card-text-list">
                        <p className='card-text-recipe'>{recipe.category}</p>
                        <p>{recipe.area}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ListRecipe