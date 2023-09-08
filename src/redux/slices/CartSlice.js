import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add : (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        empty: (state) =>{
            state.length = 0;
            toast.error("Your Cart is Empty")
        }
    }
})

export const {add, remove, empty} = CartSlice.actions; 
export default CartSlice.reducer;
