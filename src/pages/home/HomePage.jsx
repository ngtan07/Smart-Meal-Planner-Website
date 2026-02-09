import Menu from "../../components/home/MenuShortcut"
import RecipeSuggestList from "../../components/home/RecipeSuggestList"
import TitleContent from "../../components/home/TitleContent"
import '../../styles/home.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <TitleContent />
            <Menu />
            <RecipeSuggestList />
        </div>

    )
}

export default HomePage