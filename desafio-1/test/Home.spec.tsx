import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Home from '../src/pages';
// @vitest-environment happy-dom

vi.mock('next/font/google', () => ({
    Poppins: vi.fn(() => ({
      className: 'poppins-class',
    })),
  }));

describe('Home component', () => {
  it('renders Home component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Ultra Sistema de Endereços (USE)')).toBeTruthy();
  });
});
