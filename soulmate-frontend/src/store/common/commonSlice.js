/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './thunk';

const initialState = {
  categories: [],
  subCategories: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { updateCategories, updateSubCategories } = commonSlice.actions;

export default commonSlice.reducer;
