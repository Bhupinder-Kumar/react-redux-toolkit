import { useSelector } from "react-redux";

const AddToCart = () => {
    const Selector = useSelector((state) => state.cart.value );
    console.log(Selector);


    return(
        <div className="cart">
                🛒
                <span className="cart-count">{Selector}</span>
            </div>
    )
}

export default AddToCart;
