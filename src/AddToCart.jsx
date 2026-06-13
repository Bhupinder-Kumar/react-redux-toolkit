import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
    const CartSelector = useSelector((state) => state.cart.items);
    console.log(CartSelector.length);


    return (
        <>
        <Link to="/cart">
            <div className="cart">
                🛒
                <span className="cart-count">{CartSelector.length ? CartSelector.length : 0}</span>
            </div>
        </Link>
        </>
    )
}

export default AddToCart;
