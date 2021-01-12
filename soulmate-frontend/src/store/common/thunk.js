import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { CATEGORY } from '../../api/endpoints';

export const fetchCategories = createAsyncThunk(
  'common/fetchCategoryStatus',
  async () => {
    const response = await axios.get(CATEGORY);
    return response.data;
  }
);
