import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  Data: []
};

export const GetAllProducts = createAsyncThunk(
  "GetAllProducts",
  async () => {
    try {
      const response = await fetch(
        "https://localhost:7090/Product/GetAllProducts"
      );

      if (!response.ok) {
        // Handle error if the response is not OK
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching data:", error);
      throw error;
    }
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
        state.Data = action.payload;
      }
    );
  },
});
export const {
  resetAllProductDetails,
  resetActiveProjectResourceForecastErrorState,
} = allProductDetails.actions;
export default allProductDetails.reducer;
