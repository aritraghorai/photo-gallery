import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getphotos", async () => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=2&limit=10",
    {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "application/json",
      },
    }
  );
  const formatdata = await response.json();
  return formatdata;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallerySlice.reducer;
