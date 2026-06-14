import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from './redux/slice';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
    const cartItemsSelector = useSelector((state) => state.cart.items);

    console.log(cartItemsSelector);

    const [cartItems, setCartItems] = useState(cartItemsSelector);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    useEffect( ()=> {
        setCartItems(cartItemsSelector);
    }, [cartItemsSelector]);

    const manageQuantity = (id, q) =>{
        console.log(id, q);

        const quantity =  parseInt(q) > 1 ? parseInt(q) : 1; 
        const cartTempItems = cartItemsSelector.map((item) => {
            return item.id == id ?
            {...item, quantity} : item;
        });

        console.log(cartTempItems[0]);
        

        setCartItems(cartTempItems)
    }

    // Place order handle
    const placeOrderHandle = () => {
        localStorage.clear();
        dispatch(clearCart());
        navigate("/");
        alert("order Placed")
        
    } 
    return (
        <>
            <div className='p-30'>
                <div className="list-wrapper">
                    {cartItems.length > 0 ? cartItems.map((items) => (
                        <div className="list-card" key={items.id}>
                            <div className='item-left'>
                                <div className="item-img">
                                    <img src={items.thumbnail} />
                                </div>
                                <div className='item-info'>
                                    <div>{items.title}</div>
                                    <div>{items.category}</div>
                                </div>
                            </div>
                            <div className='item-price'>
                                <div>
                                    <input type="number" value={items.quantity ? items.quantity : 1} onChange={(e)=> manageQuantity(items.id, e.target.value)} />
                                </div>
                                <div className="price">$ {(items.quantity ? items.price * items.quantity : items.price).toFixed(2)}</div>
                                <button className="price-btn" onClick={()=> dispatch(removeItem(items))}>Remove</button>
                            </div>
                        </div>
                    )) : null}
                    <div className="totalPrice">Total: $ {(cartItems.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price,0)).toFixed(2)}
                    </div>
                    <div className="item-price" style={{alignItems: "start"}}>
                        <button onClick={placeOrderHandle} className="price-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList; 