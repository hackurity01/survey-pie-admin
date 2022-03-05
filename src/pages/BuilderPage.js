import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import FloatingButton from '../components/FloatingButton';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';
import { setSelectedQuestionId } from '../stores/selectedQuestionId/selectedQuestionIdSlice';
import { setSurvey } from '../stores/survey/surveySlice';

function BuilderPage() {
  const error = useSelector((state) => state.survey.error);
  const loading = useSelector((state) => state.survey.loading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.surveyId) {
      dispatch(fetchSurvey(params.surveyId));
    } else {
      dispatch(
        setSurvey({
          title: '',
          questions: [],
        }),
      );
      dispatch(setSelectedQuestionId(null));
    }
  }, [dispatch, params.surveyId]);

  if (error) {
    return 'error';
  }
  if (loading) {
    return 'loading';
  }

  return (
    <MainLayout selectedKeys={['builder']} padding={0}>
      <Row style={{ height: '100%' }}>
        <Col flex="auto" style={{ padding: 30 }}>
          <BuilderTitleInput />
          <PreviewSection />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
      <FloatingButton />
    </MainLayout>
  );
}

export default BuilderPage;
