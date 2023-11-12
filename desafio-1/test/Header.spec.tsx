import React from 'react';
import Header from '../src/components/Header';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
// @vitest-environment happy-dom

describe('Header component', () => {
  it('should render the Header component', () => {
    const { container } = render(<Header />);
    const headerTag = container.children;
    expect(headerTag).toBeTruthy();
  });

  it('renders the header with the correct CSS class', () => {
    const { container } = render(<Header />);
    const header = container.firstChild;
    expect(header).toHaveProperty(
      'className',
      'bg-[#16213e] h-100px py-6 px-8 flex items-center'
    );
  });

  it('renders the link with the correct target attribute', () => {
    const { container } = render(<Header />);
    const headerTag = container.children[0];
    const aTag = headerTag.children[0];
    expect(aTag).toHaveProperty('href', 'https://ultralims.com.br/');
    expect(aTag).toHaveProperty('target', '_blank');
    expect(aTag).toHaveProperty('rel', 'noopener noreferrer');
  });

  it('renders the image with the correct attributes', () => {
    const { container } = render(<Header />);
    const headerTag = container.children[0];
    const aTag = headerTag.children[0];
    const imageTag = aTag.children[0];
    expect(imageTag).toHaveProperty(
      'src',
      'https://ultralims.com.br/front/images/logo.svg'
    );
    expect(imageTag).toHaveProperty('className', 'w-28');
    expect(imageTag).toHaveProperty('alt', 'Ultra logo');
  });
});
