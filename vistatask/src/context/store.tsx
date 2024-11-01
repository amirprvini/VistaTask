import React, { createContext, useEffect, useState } from "react";
import { productType } from "../types/product.type";

interface AppContextState{
    isClicked: boolean , 
    setIsClicked: (isClicked:boolean)=> void , 
    serachInputValue: string , 
    setSerachInputValue : (serachInputValue:string)=> void ,
    isFocuced: boolean , 
    setIsFocuced: (isFocuced:boolean)=> void , 
    openEditModal : boolean ,
    setOpenEditModal: (openEditMoadl:boolean)=> void  , 
    targetedProduct: productType , 
    setTargetedProduct: (pro:productType)=> void
}

export const AppContext = createContext<AppContextState>({
  isClicked : false , 
  setIsClicked: ()=>{} , 
  serachInputValue: "" , 
  setSerachInputValue : ()=> {} , 
  isFocuced : false , 
  setIsFocuced: ()=>{} , 
  openEditModal : false ,
  setOpenEditModal: ()=> {} ,
  targetedProduct: {

    id:0 , 
    image:  "" , 
    title : ""  , 
    weight:""   ,
    price: "" , 
    calories: "" , 
    ingredients: [] , 
    vegan : false ,
    readOnly: false

} , 
  setTargetedProduct: ()=> {}
})

export interface IContextProvider {
    children: React.ReactNode
}

export const ContextProvider:React.FC<IContextProvider> = ({children}): JSX.Element =>{
  
  const [isClicked,setIsClicked] = useState<boolean>(false);
  const [serachInputValue,setSerachInputValue] = useState<string>("");
  const [isFocuced,setIsFocuced] = useState<boolean>(false);
  const [openEditModal,setOpenEditModal] = useState<boolean>(false);
  const [targetedProduct,setTargetedProduct] = useState<productType>({

    id:0 , 
    image:  "" , 
    title : ""  , 
    weight:""   ,
    price: "" , 
    calories: "" , 
    ingredients: [] , 
    vegan : false ,
    readOnly: false

} , )

  useEffect(()=>{
  },[])

    return <AppContext.Provider value={{
            isClicked , 
            setIsClicked , 
            serachInputValue,
            setSerachInputValue , 
            isFocuced , 
            setIsFocuced , 
            openEditModal , 
            setOpenEditModal ,  
            targetedProduct , 
            setTargetedProduct
    }}>
            {children}

    </AppContext.Provider>
}
