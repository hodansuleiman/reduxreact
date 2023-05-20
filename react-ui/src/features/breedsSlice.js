import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: [],
  reducers: {}
});

// allows us to read from this slice of state
export const selectBreeds = state => state.breeds;

export default breedsSlice.reducer;
