import { useDispatch, useSelector } from 'react-redux';

import { setSelectedQuestionId } from '../../stores/selectedQuestionId/selectedQuestionIdSlice';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection() {
  const questions = useSelector((state) => state.survey.data?.questions || []);
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );
  const dispatch = useDispatch();

  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };
  const handleMoveUpQustion = (index) => {
    if (index === 0) {
      return;
    }

    dispatch(moveUpQuestion(index));
  };
  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) {
      return;
    }

    dispatch(moveDownQuestion(index));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };
  const handleCardClick = (index) => {
    dispatch(setSelectedQuestionId(index));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQustion(index)}
          onDeleteButtonClick={() => handleDeleteQuestion(index)}
          onDownButtonClick={() => handleMoveDownQuestion(index)}
          onClick={() => handleCardClick(index)}
          isSelected={selectedQuestionId === index}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </div>
  );
}

export default PreviewSection;
