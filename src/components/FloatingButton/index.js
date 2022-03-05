import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import postSurvey from '../../services/postSurvey';
import putSurvey from '../../services/putSurvey';

function FloatingButton() {
  const navigate = useNavigate();
  const survey = useSelector((state) => state.survey.data);

  if (!survey) {
    return null;
  }

  const isEditPage = !!survey.id;

  return (
    <FloatingButtonWrapper>
      <Button
        onClick={() =>
          isEditPage
            ? putSurvey(survey)
            : postSurvey(survey).then((data) => {
                navigate(`/builder/${data.id}`);
              })
        }
      >
        저장
      </Button>
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
