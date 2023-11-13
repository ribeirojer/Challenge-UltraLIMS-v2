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

  export const listDataMock = [
      {
        searchId: 1,
        cep: '12345-678',
        logradouro: 'Rua das Flores',
        complemento: 'Apto 301',
        bairro: 'Centro',
        localidade: 'Cidade A',
        uf: 'UF A',
        ibge: '1234567',
        gia: 'GIA A',
        ddd: '11',
        siafi: '9876',
      },
      {
        searchId: 2,
        cep: '98765-432',
        logradouro: 'Avenida Principal',
        complemento: 'Casa 42',
        bairro: 'Bairro B',
        localidade: 'Cidade B',
        uf: 'UF B',
        ibge: '7654321',
        gia: 'GIA B',
        ddd: '22',
        siafi: '5432',
      },
      {
        searchId: 3,
        cep: '54321-876',
        logradouro: 'Rua da Praia',
        complemento: 'Loja 10',
        bairro: 'Beira Mar',
        localidade: 'Cidade C',
        uf: 'UF C',
        ibge: '9876543',
        gia: 'GIA C',
        ddd: '33',
        siafi: '2109',
      },
    ];