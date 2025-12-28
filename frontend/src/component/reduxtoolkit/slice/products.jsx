
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Products: [],
}

const productsReducer = createSlice({
    name: 'Prod',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // console.log(action.payload, "store");
            // const temp = { ...action.payload, qnty: 1 }
            state.Products = action.payload;
            // state.carts.push(temp)

        },
        
    }
})

export const { addProduct } = productsReducer.actions
export default productsReducer.reducer