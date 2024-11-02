import React, { useState } from "react";
import IngredientButton from "../../Buttons/IngredientButton";

interface IIngredientInput {
    onRemove: (data:string)=> void
    onComplete: (data:string)=> void , 
    ingredientsProp : string[]
}
const IngredientInput: React.FC<IIngredientInput> =({onComplete,onRemove,ingredientsProp}): JSX.Element => {

const [inputValue, setInputValue] = useState<string>("");

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setInputValue(e.target.value);
};

const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation(); 

  if (inputValue.trim()) {
    onComplete(inputValue);
    setInputValue(""); 
  }
};

const handleRemoveIngredients = (data:string) =>{
  onRemove(data)
}

  return (
    <div className="py-4">
      <div className="flex items-center w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full rounded-md border-2 border-neutral-300 px-2 py-1"
          placeholder="Enter ingredient"
        />
        <button
          onClick={handleAddClick}
          className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="mt-4">
        <p className="font-semibold mb-2 text-lg text-gray-700">Ingredients:</p>
        <ul className="ingredientsList min-h-20 p-2 flex gap-2 flex-wrap rounded-md border-2 border-neutral-300">
          {ingredientsProp.map((ingredient, index) => (
            <li key={index} >
              <IngredientButton title={ingredient} onClickProp={(e:React.MouseEvent<HTMLButtonElement>)=>{
                e.stopPropagation()
                e.preventDefault()
                handleRemoveIngredients(ingredient) } } />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientInput;
