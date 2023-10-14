import React from 'react'

const Button = ({children,onClick, className}) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#65e2d9] to-[#339ecc] outline-none border-none rounded-full  text-white relative z-20 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button