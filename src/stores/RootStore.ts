import {configureStore} from '@reduxjs/toolkit';
import photosReducer from './reducers/photosReducer';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});
