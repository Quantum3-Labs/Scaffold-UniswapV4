interface CustomInputProps {
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder = "Type here" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="max-w-[1026px] w-full py-[15px] bg-[#1E293B] px-[10px] rounded-md border-none outline-none custom-input"
    />
  );
};

export default CustomInput;
