import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slices/slices'; // Assuming you have a navigation slice

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    // Add other reducers here if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
