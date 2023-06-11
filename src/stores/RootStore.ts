import {configureStore} from '@reduxjs/toolkit';
import PhotosReducer from './reducers/PhotosReducer';

export const store = configureStore({
  reducer: {
    photoStore: PhotosReducer,
  },
});
