import { values } from "idb-keyval";

interface CustomInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
}

const Input: React.FC<CustomInputProps> = ({
  placeholder = "Type here",
  onChange: _onChange = () => {},
  value,
}: CustomInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    _onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className="max-w-[1026px] w-full py-[15px] bg-[#1E293B] px-[10px] rounded-md border-none outline-none custom-input"
      onChange={onChange}
    />
  );
};

export default Input;
