'use client'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentStep } from '../store/slices/slices'; // Assuming you have a navigation slice in your Redux store

const Navigation = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.navigation.currentStep);
  const allSteps = ['MEASUREMENT', 'SERVICES', 'ESTIMATE']; // Define all steps here

  const handlePrev = () => {
    // Dispatch an action to set the previous step
    dispatch(setCurrentStep(currentStep - 1));
  };

  const handleNext = () => {
    // Dispatch an action to set the next step
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={currentStep === 0}>
        PREVIOUS
      </button>
      <button onClick={handleNext} disabled={currentStep === allSteps.length - 1}>
        NEXT
      </button>
    </div>
  );
};

export default Navigation;
