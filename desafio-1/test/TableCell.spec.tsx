import React from "react"
import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import TableCell from "../src/components/TableCell";
// @vitest-environment happy-dom


describe('TableCell component', () => {
  it('should render the TableCell component with children', () => {
    const { getByText } = render(<TableCell>Test Content</TableCell>);

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should apply custom className to the TableCell component', () => {
    const { container } = render(<TableCell className="custom-class">Test Content</TableCell>);
    const tdElement = container.firstChild;

    expect(tdElement).toHaveProperty('className', 'py-2 px-4 border border-gray-300 custom-class');
  });
});

