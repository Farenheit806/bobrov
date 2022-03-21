import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import cartReducer from "./redux/cartSlice";
import searchReducer from "./redux/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});
