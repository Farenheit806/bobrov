import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../products/products";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: productList,
    searchWord: "",
    currentFilter: ["any", "any", "any"],
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchList = productList;
      state.searchWord = action.payload.toLowerCase();
      const condition = (product) =>
        !product.title.toLowerCase().indexOf(action.payload.toLowerCase());
      if (action.payload != "") {
        state.searchList = state.searchList.filter(condition);
      }
    },
    clearSearch: (state) => {
      state.searchList = productList;
      state.searchWord = "";
    },
    setFilter: (state, action) => {
      state.searchList = productList;
      state.currentFilter = action.payload;
      if (action.payload[0] !== "any") {
        state.searchList = state.searchList.filter(
          (product) => !product.size.indexOf(action.payload[0])
        );
      }
      if (action.payload[1] !== "any") {
        state.searchList = state.searchList.filter(
          (product) => !product.color.indexOf(action.payload[1])
        );
      }
      if (action.payload[1] !== "any") {
        state.searchList = state.searchList.filter(
          (product) => !product.category.indexOf(action.payload[2])
        );
      }
    },
    clearFilter: (state) => {
      state.searchList = productList;
      state.currentFilter = ["any", "any", "any"];
    },
  },
});

export const { setFilter, clearFilter, setSearch, clearSearch } =
  searchSlice.actions;

export const selectSearchList = (state) => state.search.searchList;
export const selectSearchWord = (state) => state.search.searchWord;

export default searchSlice.reducer;
