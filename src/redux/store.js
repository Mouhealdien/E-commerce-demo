import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import usersSlice from "./slices/usersSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    users: usersSlice,
  },
});

export default store;
