import { IoMdClose } from "react-icons/io";

interface IngredientButtonProps {
    title: string , 
    onClickProp: (e:React.MouseEvent<HTMLButtonElement>)=> void
}

const IngredientButton: React.FC<IngredientButtonProps> = ({title,onClickProp}): JSX.Element => {
  return <button className="ingredientButton font-montserrat bg-neutral-400 bg-opacity-25 py-1 px-3 my-2 rounded flex gap-2 items-center justify-center">
        <span className="remove text-md cursor-pointer" onClick={onClickProp}><IoMdClose /></span>
        <span className="title text-lg pb-1">{title}</span>
  </button>
}

export default IngredientButton