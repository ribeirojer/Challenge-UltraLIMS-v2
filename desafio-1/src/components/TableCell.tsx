import React from "react"

type TableCellProps = {
    children: React.ReactNode;
    className?: string
  };
  
  const TableCell = ({ children, className }: TableCellProps) => {
    return (
      <td className={`py-2 px-4 border border-gray-300 ${className}`}>
        {children}
      </td>
    );
  };

  export default TableCell;