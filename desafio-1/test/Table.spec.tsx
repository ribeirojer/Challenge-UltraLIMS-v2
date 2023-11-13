import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Table from '../src/components/Table';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { listDataMock } from '../src/utils';
// @vitest-environment happy-dom

const setListDataMock = vi.fn();
  
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
