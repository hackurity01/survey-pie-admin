import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import selectedQuestionIdReducer from './selectedQuestionId/selectedQuestionIdSlice';
import surveyReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: selectedQuestionIdReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
