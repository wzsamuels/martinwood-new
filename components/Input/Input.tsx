import React from 'react';

interface InputProps {
  className?: string;
  [key: string]: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`flex-1 basis-[220px] border-black border shadow-input max-w-full rounded-sm w-full focus:border-b-green-950 focus:border-red focus:outline-none p-2 ${className}`}/>
    )
  })
Input.displayName = 'Input';
export default Input