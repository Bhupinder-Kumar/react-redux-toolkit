import { useDispatch, useSelector } from "react-redux"
import { addItem, clearCart, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";
import { useEffect } from "react";

const Product = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const productSelector = useSelector((state) => state.product.items);

    // console.log(productSelector);

    const CartSelector = useSelector((state) => state.cart.items );
    // console.log(CartSelector.length);

    const addToCart = () => {
        dispatch(addItem(1));
    }
    const removeFromCart = () => {
        dispatch(removeItem(1));
    }
    const clearCartItems = () => {
        dispatch(clearCart());
    }
    return (
        <>
            <div className="grid">
                {productSelector.length > 0 ? productSelector.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.thumbnail} alt="thumbnail" />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="category">{item.category}</div>
                            <div className="price">Price: {item.price}</div>
                            <div className="rating">Rating: {item.rating}</div>
                            {CartSelector.find((cartItem) => cartItem.id === item.id) ?
                            <button onClick={()=> dispatch(removeItem(item))} className="add-cart remove-btn">Remove From Cart</button>
                             :
                            <button className="add-cart" onClick={()=> dispatch(addItem(item))}>Add to Cart</button>
                            }
                        </div>
                    </div>
                )) : "Out of Stock!"}
            </div>


            {false && <div className="product-container">

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

            </div>}

        </>

    )
}

export default Product
