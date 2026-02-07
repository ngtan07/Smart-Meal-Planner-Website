import { ShoppingCart } from 'lucide-react';
import ListShopping from '../../components/shopping/list';
import '../../styles/shopping.css'

const ShoppingPage = () => {
    return (
        <div className="recipe-list-page">
            <div className="page-title">
                <ShoppingCart color="rgba(243, 167, 54, 1)" />
                <h2>Shopping list</h2>
            </div>
            <ListShopping />

        </div>
    )
}

export default ShoppingPage;