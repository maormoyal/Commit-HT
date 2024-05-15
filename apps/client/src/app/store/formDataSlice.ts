import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './store'; // Import the AppState interface from the store configuration
import { IFormData, IFormDataState } from '../types/formDataTypes';

// Initial state with types
const initialState: IFormDataState = {
  data: {},
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    saveFormData(state, action: PayloadAction<IFormData>) {
      state.data = action.payload;
    },
    clearFormData(state) {
      state.data = {};
    },
  },
});

export const { saveFormData, clearFormData } = formDataSlice.actions;

export const useFormData = () => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state: AppState) => state.formData.data as IFormData
  );

  const setFormData = (data: IFormData) => {
    dispatch(saveFormData(data));
  };

  const resetFormData = () => {
    dispatch(clearFormData());
  };

  return {
    formDataSlice: formData,
    setFormDataSlice: setFormData,
    resetFormDataSlice: resetFormData,
  };
};

export default formDataSlice.reducer;
