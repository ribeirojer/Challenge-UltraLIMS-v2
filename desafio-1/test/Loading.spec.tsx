import React from 'react';
import Loading from '../src/components/Loading';
import { render } from '@testing-library/react';
import { it, describe, expect } from "vitest";
// @vitest-environment happy-dom

describe('Loading component', () => {
  it('should render the Loading component', () => {
    const { container } = render(<Loading />);
    const overlay = container.firstChild;

    expect(overlay).toBeTruthy();
    expect(overlay).toHaveProperty('className', 'fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-50');
    expect(overlay).toHaveProperty('role', 'presentation');
  });

  it('should render a spinning SVG with correct attributes', () => {
    const { getAllByTestId } = render(<Loading />);
    const spinner = getAllByTestId('loading-spinner')[0];

    expect(spinner).toHaveProperty("className", 'animate-spin h-20 w-20 fill-white');

    const pathElement = spinner.querySelector('path');
    expect(pathElement).toBeTruthy();
  });
});
