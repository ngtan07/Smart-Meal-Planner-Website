const getIngredients = (recipe) => {
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`]
        const measure = recipe[`strMeasure${i}`]

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
                name: ingredient,
                amount: measure,
                id: i
            })
        }
    }

    return ingredients
}

export default getIngredients