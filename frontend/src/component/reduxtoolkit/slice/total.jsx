

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amounts:"",
}

const AmountReducer = createSlice({
    name: 'Amount',
    initialState,
    reducers: {
        addamount: (state, action) => {
            console.log(action.payload, "store");
            // const temp = { ...action.payload, qnty: 1 }
            state.amounts = action.payload;
            // state.carts.push(temp)

        },
        removeamount:(state,action)=>{
            state.amounts = 0
        }
    }
})
 
export const { addamount , removeamount} = AmountReducer.actions
export default AmountReducer.reducer