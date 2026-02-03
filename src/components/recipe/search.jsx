import { Search } from "lucide-react";


const SearchRecipe = () => {

    return (
        <div className="search-recipe">
            <Search color="#8a332a" size={30} />
            <input
                type="text"
                placeholder="Search meal ..."

            />
        </div>
    )
}

export default SearchRecipe
