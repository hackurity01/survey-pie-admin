import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';

function BuilderPage() {
  const error = useSelector((state) => state.survey.error);
  const loading = useSelector((state) => state.survey.loading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (error) {
    return 'error';
  }
  if (loading) {
    return 'loading';
  }

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <BuilderTitleInput />
          <PreviewSection />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default BuilderPage;
