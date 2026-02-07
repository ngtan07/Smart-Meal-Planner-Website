import axios from "./axios.customize";

const getAllCategory = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    return data.categories;
}

const getAllCategory2 = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    const data = await res.json()
    return data.meals
}

const getAllRecipe = () => {
    const URL_BACKEND = "/search.php?s=";
    return axios.get(URL_BACKEND)
}

export { getAllCategory, getAllCategory2, getAllRecipe }