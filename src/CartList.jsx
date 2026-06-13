import React from 'react';
import { useSelector } from 'react-redux';

const CartList = () => {
    const cartItemsSelector = useSelector((state) => state.cart.items);

    console.log(cartItemsSelector);
    return (
        <>
            <div className='p-30'>
                <div className="list-wrapper">
                    {cartItemsSelector.length > 0 ? cartItemsSelector.map((items) => (
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
                                <div className="price">{items.price}</div>
                                <button className="price-btn">Remove</button>
                            </div>
                        </div>
                    )) : null}
                    <div className="totalPrice">Total: {cartItemsSelector.reduce((sum, item) => sum+item.price,0)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList; 