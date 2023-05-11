import React from "react";

interface InputWrapperProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
const InputWrapper = ({ children, onClick, className }: InputWrapperProps) => {
  return (
      <div className={`flex flex-wrap items-center ${className}`} onClick={onClick}>
        {children}
      </div>
    )
}

export default InputWrapper;