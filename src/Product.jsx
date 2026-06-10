import { useDispatch } from "react-redux"
import { addItem, clearCart, removeItem } from "./redux/slice";

const Product = () => {
    const dispatch = useDispatch();

    const addToCart = ()=> {
        dispatch(addItem(1));
    }
    const removeFromCart = ()=> {
        dispatch(removeItem(1));
    }
    const clearCartItems = ()=> {
        dispatch(clearCart());
    }
    return (
        <div className="product-container">

            <div className="product-image">
                <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
                    alt="Product"
                />
            </div>

            <div className="product-details">
                <span className="category">Men's Shoes</span>

                <h1>Nike Air Max 270</h1>

                <div className="rating">
                    ★★★★★ <span>(128 Reviews)</span>
                </div>

                <div className="price-section">
                    <span className="current-price">$129.99</span>
                    <span className="old-price">$159.99</span>
                    <span className="discount">19% OFF</span>
                </div>

                <p className="description">
                    Experience all-day comfort and modern style with the Nike Air Max 270.
                    Designed with a breathable mesh upper and signature Air cushioning for
                    superior support.
                </p>

                <div className="sizes">
                    <h3>Select Size</h3>
                    <button>7</button>
                    <button>8</button>
                    <button className="active">9</button>
                    <button>10</button>
                    <button>11</button>
                </div>

                <div className="quantity">
                    <h3>Quantity</h3>
                    <input type="number" value="1" min="1" />
                </div>

                <div className="actions">
                    <button className="add-cart" onClick={addToCart}>Add to Cart</button>
                    <button className="add-cart remove-btn" onClick={removeFromCart}>Remove From Cart</button>
                    <button className="add-cart clear-btn" onClick={clearCartItems}>Clear Cart</button>
                    {/* <button className="buy-now">Buy Now</button> */}
                </div>

                <ul className="features">
                    <li>✓ Free Shipping</li>
                    <li>✓ 30-Day Returns</li>
                    <li>✓ Secure Checkout</li>
                </ul>
            </div>

        </div>

    )
}

export default Product
