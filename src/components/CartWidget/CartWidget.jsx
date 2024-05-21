import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from '../CartContext/CartContext'; // Asegúrate de importar correctamente desde components
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function CartWidget() {
    const { cartItemCount } = useCart();
    const navigate = useNavigate(); // Hook para la navegación

    const handleCartClick = () => {
        navigate('/checkout'); // Navega a la ruta de checkout
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
