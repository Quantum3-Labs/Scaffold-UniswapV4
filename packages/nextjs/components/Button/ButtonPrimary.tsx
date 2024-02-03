interface ButtonPrimaryProps {
  destination: () => void;
  buttonText: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ destination, buttonText }) => {
  return (
    <button
      className="rounded-md text-[#FFE290] border-2 border-[#FFE290] p-[10px] text-sm px-[30px] py-[10px]"
      onClick={destination}
    >
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
