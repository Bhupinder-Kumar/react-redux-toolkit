import { createSlice } from "@reduxjs/toolkit"



// create intial State First 
const initialState = {
    // value: 0
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}


// Create Slice 
const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action)=>{
            console.log(action.payload)
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action)=>{
            const cartData = state.items.filter((item) => item.id !== action.payload.id);
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(cartData));
        },
        clearCart: (state)=>{
            state.items = [];
        }


    }
});

// Export Action 
export const {addItem, removeItem, clearCart} = addToCart.actions; 
export default addToCart.reducer;