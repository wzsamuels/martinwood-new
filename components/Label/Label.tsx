import React, {ReactNode} from "react";

interface LabelProps {
  children?: ReactNode;
  className?: string;
}

const Label = ({ children, className }: LabelProps) => {
  return (
    <label className={`basis-[170px] max-w-[200px] ${className}`}>
      {children}
    </label>
  )
}

export default Label;