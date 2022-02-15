import { Input } from 'antd';

const { TextArea } = Input;

function TextAreaInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextAreaInput;
