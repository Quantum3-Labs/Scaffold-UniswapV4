interface CustomInputProps {
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder = "Type here", onValueChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="max-w-[1026px] w-full py-[15px] bg-[#1E293B] px-[10px] rounded-md border-none outline-none custom-input"
      onChange={handleChange}
    />
  );
};

export default CustomInput;
