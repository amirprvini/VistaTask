import React from 'react'

interface IAddProductButton {
    onClickProp: ()=> void 
}
const AddProductButton: React.FC<IAddProductButton> = ({onClickProp}): JSX.Element => {
  return <button onClick={onClickProp} className={`addProduct flex justify-center rounded-2xl items-center p-6 bg-gray-100 border border-gray-400 shadow-md w-80 h-full text-center font-bold text-2xl`}> + <br /> Add new <br/> product </button>
}

export default AddProductButton