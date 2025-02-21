import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            console.log(action.payload, "store");
            const temp = { ...action.payload, qnty: 1 }
            state.carts.push(temp)

        },
        addIncrement:(state,action)=>{
          const find=  state.carts.findIndex((item)=>item._id===action.payload)
          console.log(find, 'find index');
          
          if (find !== -1) { // Check if the item was found
            state.carts[find].qnty += 1; // Increment the quantity
        } else {
            console.log(`Item with _id ${action.payload} not found.`);
        }
        },
        Singledecrement: (state, action) => {
            const find = state.carts.findIndex((item) => item._id === action.payload);
            if (find !== -1) { // Check if the item was found
                if (state.carts[find].qnty > 0) { // Prevent decrementing below 0
                    state.carts[find].qnty -= 1;
                } else {
                    console.log(`Item with _id ${action.payload} already at 0.`);
                }
            } else {
                console.log(`Item with _id ${action.payload} not found.`);
            }
        },

        Delete: (state, action) => {
            state.carts = state.carts.filter((item) => item._id !== action.payload);
        },
        removeCart: (state, action) => {
            state.carts = []
        }
         
    }
})

export const { addCart, removeCart,addIncrement ,Singledecrement, Delete} = Cartslice.actions
export default Cartslice.reducer