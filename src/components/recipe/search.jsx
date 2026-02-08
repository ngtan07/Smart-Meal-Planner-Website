import { Search } from "lucide-react";
import { Input } from 'antd';
import { getRecipeByName } from '../../services/recipe.service'

const SearchRecipe = () => {


    const searchRecipeByName = async (value) => {
        const recipe = await getRecipeByName(value)
    }
    searchRecipeByName()

    return (
        <Input className="search-recipe"
            placeholder="Search meal ..."

            // onPressEnter return event
            onPressEnter={(e) => searchRecipeByName(e.target.value)}
            prefix={
                <Search
                    style={{
                        fontSize: '30px',
                        color: '#8a332a',
                        marginRight: '8px'
                    }}


                />
            }
        />
    )
}

export default SearchRecipe
