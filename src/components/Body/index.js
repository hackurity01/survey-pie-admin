import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';

function Body({ type, options }) {
  let Component;
  if (type === 'text') {
    Component = TextInput;
  } else if (type === 'textarea') {
    Component = TextAreaInput;
  } else if (type === 'select') {
    Component = SelectInput;
  }

  return <Component options={options} />;
}

export default Body;
