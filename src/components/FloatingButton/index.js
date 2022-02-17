import { Button } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import putSurvey from '../../services/putSurvey';

function FloatingButton() {
  const survey = useSelector((state) => state.survey.data);

  return (
    <FloatingButtonWrapper>
      <Button onClick={() => putSurvey(survey)}>저장</Button>
    </FloatingButtonWrapper>
  );
}

const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 2px 5px -2px #cacaca;
`;

export default FloatingButton;
