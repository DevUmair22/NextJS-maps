import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentStep: number;
}

const initialState: NavigationState = {
  currentStep: 0,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = navigationSlice.actions;
export default navigationSlice.reducer;
