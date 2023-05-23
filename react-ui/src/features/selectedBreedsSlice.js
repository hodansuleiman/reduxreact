import { createSlice } from '@reduxjs/toolkit';


export const selectedBreedsSlice= createSlice({
  name: 'selectedBreeds',
  initialState: [],
  reducers: {
    addselectBreedsToStore(state,action){
        return action.payload;
    }
  }, // writes to the store
});

// allows us to read from this slice of state
export const selectSelectedBreeds = state => state.selectedBreeds;

export default selectedBreedsSlice.reducer;

export const {addSelectBreedsToStore} = selectedBreedsSlice.actions;