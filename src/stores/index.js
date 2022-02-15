import { configureStore } from '@reduxjs/toolkit';

import surveySlice from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveySlice,
  },
});
