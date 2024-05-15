import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';
import { IFormDataState } from '../types/formDataTypes';

// Define the AppState interface based on the reducers
export interface AppState {
  formData: IFormDataState;
}

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
