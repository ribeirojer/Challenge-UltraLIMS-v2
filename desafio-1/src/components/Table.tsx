import React from "react";
import { Dispatch, SetStateAction, useState } from "react";
import { ICep } from "../interfaces/Cep";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import SortableTableHeader from "./SortableTableHeader";
import { sortData } from "../utils";

type Props = {
  listData: ICep[];
  setListData: Dispatch<SetStateAction<ICep[]>>
}

const Table = ({
  listData,
  setListData
}: Props) => {
  const [orderBairro, setOrderBairro] = useState<"asc" | "desc">("asc");
  const [orderLocalidade, setOrderLocalidade] = useState<"asc" | "desc">("asc");
  const [orderUf, setOrderUf] = useState<"asc" | "desc">("asc");

  function handleOrderBairro() {
    setOrderBairro(orderBairro === "asc" ? "desc" : "asc");
    setListData(sortData(listData, "bairro", orderBairro));
  }

  function handleOrderLocalidade() {
    setOrderLocalidade(orderLocalidade === "asc" ? "desc" : "asc");
    setListData(sortData(listData, "localidade", orderLocalidade));
  }
  
  function handleOrderUF() {
    setOrderUf(orderUf === "asc" ? "desc" : "asc");
    setListData(sortData(listData, "uf", orderUf));
  }

  return (
    <section className="border border-gray-300 mt-4 ">
      <div className="overflow-x-auto">
        <table className="w-[1280px] md:w-full table-fixed">
          <thead>
            <tr className="text-white bg-blue-500">
            <TableHeader className="w-1/12"
              >CEP</TableHeader>
              <TableHeader className="w-2/6"
            >Logradouro</TableHeader>
              <SortableTableHeader
                className="w-1/6 md:w-2/6 cursor-pointer"
                onClick={handleOrderBairro}
                order={orderBairro}>
                Bairro
              </SortableTableHeader>
              <SortableTableHeader
                className="w-1/6 cursor-pointer"
                onClick={handleOrderLocalidade}
                order={orderLocalidade}>
                  Localidade
              </SortableTableHeader>
              <SortableTableHeader
                className="w-1/12 cursor-pointer"
                onClick={handleOrderUF}
 order={orderUf}              >UF
              </SortableTableHeader>
            </tr>
          </thead>
          <tbody>
            {listData.map((item) => (
              <TableRow key={item.searchId} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
