import React from 'react'

const MainBody = ({children}) => {
  return (
    <div className="bg-dark-background h-screen flex flex-row justify-center items-center">
        {children}
    </div>
  )
}

export default MainBody