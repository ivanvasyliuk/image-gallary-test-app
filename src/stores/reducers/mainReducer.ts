import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../api';

export const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  const response = await Api.Photos.fetchPhotos();
  return response.data;
});

const initialState = {items: [], value: 0};

export const photosReducer = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    fetch(state) {
      state.value += 1;
      Api.Photos.fetchPhotos();
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      // Add user to the state array
      state.items = action.payload;
    });
  },
});

export const {fetch} = photosReducer.actions;

export default photosReducer.reducer;
