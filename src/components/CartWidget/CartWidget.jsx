import { FaShoppingBasket } from "react-icons/fa";
function CartWidget() {
    return (
        <>
            <div className='mx-auto position-relative'>
                <FaShoppingBasket size="2rem" />
                <span className='badge position-absolute bg-danger rounded-5 ms-1'>3</span>
            </div>
        </>
    )
}

export default CartWidget