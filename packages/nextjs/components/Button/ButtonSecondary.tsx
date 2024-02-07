interface ButtonProps {
  onClick?: () => void;
  textButton: string;
}
const ButtonSecondary: React.FC<ButtonProps> = ({ onClick, textButton }) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none hover:text-[#FFE290] text-black border-[#FFE290] hover:bg-[#151F30] w-full p-[15px] rounded-md border-2 bg-[#FFE290] transition-colors duration-300"
    >
      {textButton}
    </button>
  );
};

export default ButtonSecondary;
