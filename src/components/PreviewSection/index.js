import Card from '../Card';

function PreviewSection({ questions }) {
  return (
    <div>
      {questions.map((qustion, index) => (
        <Card key={index} title={qustion.title} desc={qustion.desc}>
          Body
        </Card>
      ))}
    </div>
  );
}

export default PreviewSection;
