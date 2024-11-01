import React, { useState } from "react";

interface IIngredientInput {
    onComplete: (data:string)=> void , 
    ingredientsProp : string[]
}
const IngredientInput: React.FC<IIngredientInput> =({onComplete,ingredientsProp}): JSX.Element => {

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


  return (
    <div className="py-4">
      <div className="flex items-center w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full rounded-sm border border-neutral-300 px-2 py-1"
          placeholder="Enter ingredient"
        />
        <button
          onClick={handleAddClick}
          className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-sm hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="mt-4">
        <h3>Ingredients:</h3>
        <ul className="ingredientsList min-h-10 p-2 flex gap-2 flex-wrap border border-neutral-300">
          {ingredientsProp.map((ingredient, index) => (
            <li key={index} className="bg-gray-100 p-2 my-2 rounded">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientInput;
