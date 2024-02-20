import Input from "~~/components/InputDetails/Input";

interface DetailsInputerProps {
  label: string;
}

const DetailsInputer: React.FC<DetailsInputerProps> = ({ label }) => {
  return (
    <div className="flex gap-[20px] py-[10px] items-center justify-center">
      <span className="max-w-[130px] w-full ">{label}</span>
      <Input />
    </div>
  );
};

export default DetailsInputer;
