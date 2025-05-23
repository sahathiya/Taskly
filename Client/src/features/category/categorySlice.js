import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryActions";

const categorySlice=createSlice({
    name:'category',
    initialState:{categories:[],loading:false,error:null},
    extraReducers:(builder)=>{
         builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }

})



export default categorySlice.reducer