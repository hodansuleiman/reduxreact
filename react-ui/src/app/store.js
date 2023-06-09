import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';
import subbreedsReducer from '../features/subbreedsSlice';
import selectedBreedsReducer from '../features/selectedBreedsSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer, 
    breedsWithSubbreeds: subbreedsReducer,
    selectedBreeds: selectedBreedsReducer
  }
});
