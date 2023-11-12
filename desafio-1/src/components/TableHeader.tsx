import React from "react";
import { ICep } from "@/interfaces/Cep";
import { SortAscending, SortDescending } from "./Icons";

export type TableHeaderProps = {
    children: React.ReactNode;
    onClick?: () => void;
    order?: "asc" | "desc";
    className: string;
  };
  
  const TableHeader = ({ children, onClick, order, className }: TableHeaderProps) => {
    return (
      <th
        className={`py-2 px-4 border border-gray-300 ${className}`}
        onClick={onClick}
        scope="col"
        aria-label={`Ordenar coluna ${children} em ordem alfabética ${order === "asc" ? "ascendente" : "descendente"}`}
      >
        <div className="flex items-center gap-4 justify-center">
          {order === undefined ? null : order === "asc" ? <SortAscending /> : <SortDescending />}
          <span>{children}</span>
        </div>
      </th>
    );
  };

  export default TableHeader