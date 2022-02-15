import { Input } from 'antd';

function TextInput({ options }) {
  return <Input placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextInput;
