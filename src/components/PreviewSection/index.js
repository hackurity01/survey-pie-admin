import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection({
  questions,
  addQuestion,
  moveUpQustion,
  moveDownQuestion,
  deleteQuestion,
}) {
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => moveUpQustion(index)}
          onDeleteButtonClick={() => deleteQuestion(index)}
          onDownButtonClick={() => moveDownQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton onClick={addQuestion} />
    </div>
  );
}

export default PreviewSection;
