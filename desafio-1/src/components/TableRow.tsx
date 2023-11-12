import React from "react";
import TableCell from "./TableCell";
import { ICep } from "@/interfaces/Cep";

type TableRowProps = {
  item: ICep;
};

const TableRow = ({ item }: TableRowProps) => {
  return (
    <tr className="hover:bg-blue-400 hover:text-white even:bg-slate-200">
      <TableCell className="w-1/12 px-3 md:px-2">{item.cep}</TableCell>
      <TableCell className="w-2/6">{item.logradouro}</TableCell>
      <TableCell className="w-2/6">{item.bairro}</TableCell>
      <TableCell className="w-1/6">{item.localidade}</TableCell>
      <TableCell className="w-1/12">{item.uf}</TableCell>
    </tr>
  );
};

export default TableRow