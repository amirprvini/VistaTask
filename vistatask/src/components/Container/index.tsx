import React from 'react'

interface IContainer {
    children: React.ReactNode 
}

const Container: React.FC<IContainer> = ({children}): JSX.Element => {
  return <div className="container w-4/5 h-full"> {children} </div>
}

export default Container