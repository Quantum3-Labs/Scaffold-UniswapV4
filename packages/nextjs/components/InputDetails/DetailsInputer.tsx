import CustomInput from "~~/components/InputDetails/CustomInput";

interface DetailsInputerProps {
  label: string;
}

const DetailsInputer: React.FC<DetailsInputerProps> = ({ label }) => {
  return (
    <div className="flex gap-[20px] py-[10px] items-center justify-center">
      <span className="max-w-[130px] w-full ">{label}</span>
      <CustomInput />
    </div>
  );
};

export default DetailsInputer;
