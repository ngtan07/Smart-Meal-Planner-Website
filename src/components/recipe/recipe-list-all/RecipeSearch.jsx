import { Search } from "lucide-react";
import { Input } from 'antd';
import { getRecipeByName } from '../../../services/recipe.service'
import { useEffect, useState } from "react";

const RecipeSearch = ({ handleSearch }) => {

    return (
        <Input className="search-recipe"
            placeholder="Search meal ..."

            // onPressEnter return event
            onPressEnter={(e) => handleSearch(e.target.value)}
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

export default RecipeSearch
