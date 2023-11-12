import React from "react";

type Props = {
  children?: React.ReactNode;
  color: string
}

const Message = ({ children, color }: Props) => {
    if (!children) return null;
   
    return (
      <div className={`text-center text-${color}-500 mt-4`}>
        {children}
      </div>
    );
   };
   
   export default Message;
   