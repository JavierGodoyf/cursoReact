import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

function CartWidget() {
    const { cartItemCount } = useCart();
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/checkout');
    };

    return (
        <div className='mx-auto position-relative' onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            <FaShoppingBasket size="2rem" />
            {cartItemCount > 0 && (
                <span className='badge position-absolute bg-danger rounded-5 ms-1'>{cartItemCount}</span>
            )}
        </div>
    );
}

export default CartWidget;
