import React, { createContext, useEffect, useState } from "react";

interface AppContextState{
    isClicked: boolean , 
    setIsClicked: (isClicked:boolean)=> void , 
}

export const AppContext = createContext<AppContextState>({
  isClicked : false , 
  setIsClicked: ()=>{} , 
})

export interface IContextProvider {
    children: React.ReactNode
}

export const ContextProvider:React.FC<IContextProvider> = ({children}): JSX.Element =>{
  
  const [isClicked,setIsClicked] = useState<boolean>(false);
  
  useEffect(()=>{
  },[])

    return <AppContext.Provider value={{
            isClicked , 
            setIsClicked , 
    }}>
            {children}

    </AppContext.Provider>
}
