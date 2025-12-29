
import { BookOpen, Calendar, Package, ShoppingCart, ChefHat, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/home.css'

const Menu = () => {

    const navigate = useNavigate();
    const shortcuts = [
        { icon: BookOpen, label: 'Recipe', path: '/recipe', color: 'rgb(64, 129, 240)' },
        { icon: Calendar, label: 'Meal schedule', path: '/plan', color: 'rgb(105, 175, 105)' },
        { icon: Package, label: 'Ingredient', path: '/ingredient', color: 'rgb(165, 93, 165)' },
        { icon: ShoppingCart, label: 'Shopping', path: '/shopping', color: 'rgb(236, 115, 115)' },
    ];
    return (
        <>
            <div className="home-menu">
                <h2>Welcome back, Ng T An !</h2>
                <p>What would you like to cook today ?</p>

                <div className="home-shortcut">
                    {shortcuts.map((shortcut) => (
                        <button
                            key={shortcut.path}
                            onClick={() => navigate(shortcut.path)}
                            className="shortcut-item"
                        >
                            <div className="shortcut-icon" style={{ backgroundColor: shortcut.color }}>
                                <shortcut.icon />
                            </div>
                            <span className="">{shortcut.label}</span>
                        </button>
                    ))}
                </div>
            </div >
        </>
    )
}

export default Menu;
