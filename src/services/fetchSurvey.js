import fetcher from '../lib/fetcher';
import { setError, setLoading, setSurvey } from '../stores/survey/surveySlice';

const fetchSurvey = (surveyId) => (dispatch, getState) => {
  setLoading(true);
  fetcher(`/surveys/${surveyId}`)
    .then((data) => {
      dispatch(setSurvey(data));
    })
    .catch((err) => {
      dispatch(setError(err));
    })
    .finally(() => {
      setLoading(false);
    });
};

export default fetchSurvey;
