import React from "react"
import TableHeader from '../src/components/TableHeader';
import { fireEvent, render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
// @vitest-environment happy-dom

const mockOnClick = vi.fn();

describe('TableHeader component', () => {
  it('should render the TableHeader component with correct data', () => {
    const { getByText } = render(<TableHeader className='w-1/4'>Column Header</TableHeader>);

    expect(getByText("Column Header")).toBeTruthy();
  });

  it('should call onClick when the TableHeader is clicked', () => {
    const { container } = render(<TableHeader onClick={mockOnClick} className="w-1/6">Column Header</TableHeader>);
    const thElement = container.firstChild;
    if(thElement)fireEvent.click(thElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should apply default styles to the TableHeader component', () => {
    const { container } = render(<TableHeader className='w-1/4'>Column Header</TableHeader>);
    const thElement = container.children[0];

    const className = thElement.attributes.getNamedItem("class")?.value;
    expect(className).toContain('w-1/4');
  });

  it('should apply custom className to the TableHeader component', () => {
    const { container } = render(<TableHeader className="">Column Header</TableHeader>);
    const thElement = container.firstChild;

    expect(thElement).toHaveProperty('className', 'py-2 px-4 border border-gray-300 ');
  });

  it('should not display SortAscending or SortDescending icons when order is undefined', () => {
    const { queryByTestId } = render(<TableHeader className="">Column Header</TableHeader>);
    const sortAscendingIcon = queryByTestId('sort-ascending-icon');
    const sortDescendingIcon = queryByTestId('sort-descending-icon');

    expect(sortAscendingIcon).toBeNull();
    expect(sortDescendingIcon).toBeNull();
  });

  it('should display SortAscending icon when order is "asc"', () => {
    const { getByTestId } = render(<TableHeader className="" order="asc">Column Header</TableHeader>);
    const sortAscendingIcon = getByTestId('sort-ascending-icon');

    expect(sortAscendingIcon).toBeTruthy();
  });

  it('should display SortDescending icon when order is "desc"', () => {
    const { getByTestId } = render(<TableHeader className="" order="desc">Column Header</TableHeader>);
    const sortDescendingIcon = getByTestId('sort-descending-icon');

    expect(sortDescendingIcon).toBeTruthy();
  });
});

