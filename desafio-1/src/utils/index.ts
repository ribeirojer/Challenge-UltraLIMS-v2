import { ICep } from "@/interfaces/Cep";

export function sortData(listData: ICep[], key: keyof ICep, order: string) {
    return [...listData].sort((a, b) => {
      if (a[key] === null) return 1;
      if (b[key] === null) return -1;
      if (a[key] === null && b[key] === null) return 0;
      const comparison = a[key].toString().localeCompare(b[key].toString());
      return order === "asc" ? comparison : -comparison;
    });
  }