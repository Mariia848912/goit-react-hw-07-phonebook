import { createSlice } from '@reduxjs/toolkit';

const filterInitialeState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialeState,
  reducers: {
    setStatusFilter(state, action) {
      state.value = action.payload;
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
