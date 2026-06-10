import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('Product', async ()=> {
    const response = await fetch('https://dummyjson.com/products');
    const resJson = await response.json();
    return resJson.products;
});


const initialState = {
    items: [],
    status: undefined,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        });
    }

});


export default productSlice.reducer;
