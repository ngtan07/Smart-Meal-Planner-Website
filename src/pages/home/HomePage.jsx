import Menu from "../../components/home/menu"
import ListSuggest from "../../components/home/listSuggest"
import TitleContent from "../../components/home/title"
import '../../styles/home.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <TitleContent />
            <Menu />
            <ListSuggest />
        </div>

    )
}

export default HomePage