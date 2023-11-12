import React from 'react';
import TableRow from '../src/components/TableRow';
import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// @vitest-environment happy-dom

const mockItem = {
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
  };

describe('TableRow component', () => {
  it('should render the TableRow component with correct data', () => {
    const { getByText } = render(<TableRow item={mockItem} />);

    expect(getByText(mockItem.cep)).toBeTruthy();
    expect(getByText(mockItem.logradouro)).toBeTruthy();
    expect(getByText(mockItem.bairro)).toBeTruthy();
    expect(getByText(mockItem.localidade)).toBeTruthy();
    expect(getByText(mockItem.uf)).toBeTruthy();
  });

  it('should apply hover styles to the TableRow component', () => {
    const { container } = render(<TableRow item={mockItem} />);
    const trElement = container.firstChild;

    expect(trElement).toHaveProperty('className', 'hover:bg-blue-400 hover:text-white even:bg-slate-200');
  });

  it('should apply default styles to TableCell components', () => {
    const { container } = render(<TableRow item={mockItem} />);
    const tdElements = container.querySelectorAll('td');

    tdElements.forEach((tdElement) => {
        const className = tdElement.attributes.getNamedItem("class")?.value;
        console.log(className)
        expect(className).toContain('py-2 px-4 border border-gray-300');
      })
    });

  it('should apply custom styles to specific TableCell components', () => {
    const { container } = render(<TableRow item={mockItem} />);
    const w1_12Element = container.children[0].getElementsByClassName('w-1/12')
    const w2_6Element = container.children[0].getElementsByClassName('w-2/6');
    const w1_6Element = container.children[0].getElementsByClassName('w-1/6');

    expect(w1_12Element.length).toBe(2);
    expect(w2_6Element.length).toBe(2);
    expect(w1_6Element.length).toBe(1);
  });
});

