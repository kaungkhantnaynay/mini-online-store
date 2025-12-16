import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        showProducts: false,
        selectedCategory: "beauty",
    },
    reducers: {
        setSelectedCategory: (state,action) => {
            state.selectedCategory = action.payload
        }
    }
})
export const {setSelectedCategory} = productsSlice.actions;
export default productsSlice.reducer;