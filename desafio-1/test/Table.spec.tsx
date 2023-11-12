import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Table from '../src/components/Table';
import { beforeEach, describe, it, expect, vi } from 'vitest';
// @vitest-environment happy-dom

const setListDataMock = vi.fn();

const listDataMock = [
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
  
describe('Table component', () => {
  beforeEach(() => {
    setListDataMock.mockClear();
  });

  it('should render the Table component with headers and rows', () => {
    const { getByText } = render(<Table listData={listDataMock} setListData={setListDataMock} />);

    // Verifica se os headers estão presentes
    expect(getByText('CEP')).toBeTruthy();
    expect(getByText('Logradouro')).toBeTruthy();
    expect(getByText('Bairro')).toBeTruthy();
    expect(getByText('Localidade')).toBeTruthy();
    expect(getByText('UF')).toBeTruthy();

    // Verifica se as linhas estão presentes
    listDataMock.forEach((item) => {
      expect(getByText(item.cep)).toBeTruthy();
      expect(getByText(item.logradouro)).toBeTruthy();
      expect(getByText(item.bairro)).toBeTruthy();
      expect(getByText(item.localidade)).toBeTruthy();
      expect(getByText(item.uf)).toBeTruthy();
   });
  });

  it('should handle sorting when the headers are clicked', () => {
    const { container } = render(<Table listData={listDataMock} setListData={setListDataMock} />);

    const bairro = container.children[0].children[0].children[0].getElementsByClassName('cursor-pointer')[0]
    const localidade = container.children[0].children[0].children[0].getElementsByClassName('cursor-pointer')[1]
    const uf = container.children[0].children[0].children[0].getElementsByClassName('cursor-pointer')[2]
    
    fireEvent.click(bairro)
    expect(setListDataMock).toHaveBeenCalled();
    setListDataMock.mockClear();

    fireEvent.click(localidade)
    expect(setListDataMock).toHaveBeenCalled();
    setListDataMock.mockClear();

    fireEvent.click(uf)
    expect(setListDataMock).toHaveBeenCalled();
  });
 
});
