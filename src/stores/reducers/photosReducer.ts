import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../api';

export const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  const response = await Api.Photos.fetchPhotos();
  return response.data;
});

const initialState = {photos: []};

export const photosReducer = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export default photosReducer.reducer;
