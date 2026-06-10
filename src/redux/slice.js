import { createSlice } from "@reduxjs/toolkit"



// create intial State First 
const initialState = {
    value: 0
}


// Create Slice 
const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state)=>{
            state.value += 1;
        },
        removeItem: (state)=>{
            state.value > 0 ? state.value -= 1 : null;
        },
        clearCart: ()=>{
            return initialState;
        }


    }
});

// Export Action 
export const {addItem, removeItem, clearCart} = addToCart.actions; 
export default addToCart.reducer;