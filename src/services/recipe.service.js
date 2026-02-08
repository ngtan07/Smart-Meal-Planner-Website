import axios from "./axios.customize";

// const getAllCategory = async () => {
//     const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
//     const data = await res.json()
//     return data.meals
// }

const getAllCategory = () => {
    const URL_BACKEND = '/list.php?c=list';
    return axios.get(URL_BACKEND)
}

const getAllArea = () => {
    const URL_BACKEND = '/list.php?a=list';
    return axios.get(URL_BACKEND)
}

const getAllRecipe = () => {
    const URL_BACKEND = "/search.php?s=";
    return axios.get(URL_BACKEND)
}

const getRecipeByName = (name) => {
    const URL_BACKEND = `/search.php?s=${name}`;
    return axios.get(URL_BACKEND)
}

const getRecipeByCategory = (category) => {
    const URL_BACKEND = `/filter.php?c=${category}`;
    return axios.get(URL_BACKEND)
}

const getRecipeByArea = (area) => {
    const URL_BACKEND = `/filter.php?a=${area}`;
    return axios.get(URL_BACKEND)
}

const getRecipeDetailById = (id) => {
    const URL_BACKEND = `/lookup.php?i=${id}`
    return axios.get(URL_BACKEND)
}
export { getAllCategory, getAllArea, getAllRecipe, getRecipeDetailById, getRecipeByName, getRecipeByCategory, getRecipeByArea }