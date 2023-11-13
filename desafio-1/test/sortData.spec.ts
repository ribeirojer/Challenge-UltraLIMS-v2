import { it, describe, expect } from "vitest";
import { listDataMock, sortData } from "../src/utils/index"

describe('sortData', () => {
  it('should sort data in ascending order based on localidade', () => {
    const sortedData = sortData(listDataMock, 'localidade', 'asc');
    expect(sortedData).toEqual([
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
      ]);
  });

  it('should sort data in descending order based on uf', () => {
    const sortedData = sortData(listDataMock, 'uf', 'desc');
    expect(sortedData).toEqual([
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
      },{
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
    ]);
  });

  it('should handle null values by placing them at the end in ascending order', () => {
    let dataWithNull = listDataMock
    dataWithNull[0].uf = null as any

    const sortedData = sortData(dataWithNull as any, 'uf', 'asc');
    expect(sortedData).toEqual([
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
        },{
        searchId: 1,
        cep: '12345-678',
        logradouro: 'Rua das Flores',
        complemento: 'Apto 301',
        bairro: 'Centro',
        localidade: 'Cidade A',
        uf: null,
        ibge: '1234567',
        gia: 'GIA A',
        ddd: '11',
        siafi: '9876',
      },
    ]);
  });
});

