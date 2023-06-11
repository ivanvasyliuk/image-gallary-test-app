import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import Api from '../../api';

export const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  const response = await Api.Photos.fetchPhotos();
  return response.data;
});

const photosAdapter = createEntityAdapter({
  selectId: photo => photo.id,
  // sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = photosAdapter.getInitialState({items: []});

export const photosReducer = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    fetch(state) {
      Api.Photos.fetchPhotos();
    },
    setAllPhotos: photosAdapter.setAll,
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      // Add user to the state array
      state.items = action.payload;
    });
  },
});

export const {fetch, setAllPhotos} = photosReducer.actions;

export default photosReducer.reducer;
