import TableHeader, { TableHeaderProps } from "./TableHeader";
import React from "react";

type SortableTableHeaderProps = TableHeaderProps & {
    order: "asc" | "desc";
  };
  
  const SortableTableHeader = ({ children, onClick, order, className }: SortableTableHeaderProps) => {
    return (
      <TableHeader
        onClick={onClick}
        order={order}
        className={className}
      >{children}</TableHeader>
    );
  };

  export default SortableTableHeader