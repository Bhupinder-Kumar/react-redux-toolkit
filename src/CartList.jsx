import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CartList = () => {
    const cartItemsSelector = useSelector((state) => state.cart.items);

    console.log(cartItemsSelector);

    const [cartItems, setCartItems] = useState(cartItemsSelector);

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
                                <button className="price-btn">Remove</button>
                            </div>
                        </div>
                    )) : null}
                    <div className="totalPrice">Total: $ {(cartItems.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price,0)).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList; 