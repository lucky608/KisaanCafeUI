import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  Data: []
};

export const GetAllProducts = createAsyncThunk(
  "GetAllProducts",
  async () => {
    const response = await fetch(
     "url here"
    );

    return response;
  }
);

const allProductDetails = createSlice({
  name: "allProductDetails",
  initialState,
  reducers: {
    resetAllProductDetails: (state) => {
      state.Data = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      GetAllProducts.fulfilled,
      (state, action) => {
        state.Data = action.payload?.result ? [...action.payload.result] : [];
      }
    );
  },
});
export const {
  resetAllProductDetails,
  resetActiveProjectResourceForecastErrorState,
} = allProductDetails.actions;
export default allProductDetails.reducer;
