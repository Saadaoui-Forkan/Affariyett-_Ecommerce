import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems : [],
    },
    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;
            const itemInCart = state.cartItems.find(item => item.id === newItem.id);
            if (itemInCart) {
                state.cartItems = state.cartItems.map(item => item.id === newItem.id ? newItem : item)
            } else {
                state.cartItems = [...state.cartItems,newItem]
            }
        },
        removeFromCart(state,action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        }
    }
})

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export { cartActions,cartReducer }