import { useSelector } from "react-redux";

const AddToCart = () => {
    const CartSelector = useSelector((state) => state.cart.items );
    console.log(CartSelector.length);


    return(
        <div className="cart">
                🛒
                <span className="cart-count">{CartSelector.length ? CartSelector.length : 0}</span>
            </div>
    )
}

export default AddToCart;
